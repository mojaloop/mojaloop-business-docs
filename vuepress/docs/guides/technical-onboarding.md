# Technical onboarding for DFSPs

At a high level, onboarding to a Mojaloop Hub requires a DFSP to focus their efforts around the following major milestones:

* Integration of their core backend with the Mojaloop Hub on the API level (this involves both coding and testing).
* Connecting to pre-production and production environments following rigorous Mojaloop security requirements.

This section provides a high-level overview of both.

::: tip
There are open-source tools available to facilitate both the API integration step and the connecting step.
:::

## API integration

Within the context of the Mojaloop Financial Service Provider Interoperability (FSPIOP) API, a transfer happens in three main steps:

1. Identifying the Payee (party lookup or discovery phase)
1. Agreeing the transfer (quote or agreement phase)
1. Executing the transfer (transfer phase)

For further details on each of these phases, see **Module 2: Mojaloop in greater detail** of [Mojaloop training course](https://learn.mojaloop.io/) **DFSP-101**.

These three phases correspond to the key resources of the Mojaloop FSPIOP API:

* **Party lookup service**: Identifying the DFSP serving the Payee and the Payee itself (= the recipient of funds in a transaction) based on a Payee identifier (typically a MSISDN, that is, a mobile number).
* **Quotes service**: Requesting a quote and exchanging cryptographic proof to prepare and secure the transfer. A quote is a contract between a Payer DFSP and Payee DFSP for a particular financial transaction before the transaction is performed. It guarantees the agreement set by the Payer and Payee DFSPs about the Payer, the Payee, and transfer amount, and is valid during the lifetime of a quote and transfer of a specified financial transaction.
* **Transfers service**: Executing the transaction as per the agreed details and cryptographic proof.

DFSPs can choose to implement the asynchronous Mojaloop version of these API services, or a simplified, synchronous, Mojaloop-compliant version of them - leveraging the [Mojaloop-SDK](https://github.com/mojaloop/sdk-scheme-adapter) or [Payment Manager OSS](https://pm4ml.github.io/documents/payment_manager_oss/latest/index.html).

While the DFSP is carrying out offline development work, the Hub Operator's role consists in answering ad-hoc questions around the specifics of the API, or - depending on the open-source tool chosen and the agreed deployment model - can even extend to doing some of the development too.

Once the DFSP has completed coding, they test their integration against a lab instance in a test environment provided by the Hub. This is where the [connection phase](#connecting-to-mojaloop-environments) of the technical onboarding journey begins, with a new set of responsibilities for the Hub Operator. 

## Connecting to Mojaloop environments

To get an idea of what connecting a DFSP to a Mojaloop environment entails, it is important to understand the security requirements of Mojaloop.

Any implementation of Mojaloop employs the following security measures to protect the data exchanged between DFSPs:

* **Transport Layer Security** is a secure mechanism for exchanging a shared symmetric key over a network between two anonymous peers, with identity verification (that is, trusted certificates). It provides confidentiality (no one has read the content) and integrity (no one has changed the content). Mojaloop requires two-way TLS mutual authentication using X.509 certificates for securing bi-directional connections. DFSPs and the Mojaloop Hub authenticate each other to ensure that both parties involved in the communication are trusted. Both parties share their public certificates with each other and then verification/validation is performed based on that. 
* Another security measure that is offered for authentication is the **OAuth tokens** that DFSPs are required to use when making an API call request. OAuth 2 is used to provide role-based access to Mojaloop Hub endpoints (API authorization).
* **IP address whitelisting** reduces the attack surface of the Mojaloop Hub.
* To protect the application level, Mojaloop implements **JSON Web Signature (JWS)** as defined in [RFC 7515 (JSON Web Signature (JWS))](https://tools.ietf.org/html/rfc7515), the standard for integrity and non-repudiation. Signing messages ensures the Payer DFSP and the Payee DFSP can trust that messages shared between each other have not been modified by a third party. 
* The Mojaloop FSPIOP API implements support for the **Interledger Protocol (ILP)**. ILP is built on the concept of conditional transfers, in which ledgers involved in a financial transaction from the Payer to the Payee can first reserve funds out of a Payer account and later commit them to the Payee account. The transfer from the Payer to the Payee account is conditional on the presentation of a fulfilment that satisfies the condition attached to the original transfer request. 

![Security overview](/security_overview.png)

Putting the above security measures into practice requires extensive information sharing and technical configuration from different teams at both the DFSP and the Mojaloop Hub. For a detailed view of the processes around the sharing of mTLS and JWS digital certificates, as well as endpoint details, see [Details of connecting to Mojaloop environments](details-of-connecting-to-mojaloop.md).

## Onboarding in the Hub backend

Onboarding comprises certain steps that do not require any actions from DFSPs and are the sole responsibility of the Hub Operator. These steps are as follows:

1. Configure the Hub API gateways that handle incoming and outgoing data flows from/to DFSPs. Mojaloop employs WSO2 technologies for gateway access, as well as DFSP authorization and authentication for message pass-through via the gateways. The WSO2 product stack can be deployed from code using a continuous integration and deployment (CI/CD) solution, provisioning can be done through automation scripts.
1. Create users and accounts, configure role-based access control.
1. Set up the Hub for managing the use cases supported by the Scheme:
    - Configure Hub ledgers.
    - Configure Hub notification emails.
    - Configure settlement model.
    - Onboard oracles. \
    Mojaloop provides a [provisioning script](https://github.com/mojaloop/testing-toolkit-test-cases/tree/master/collections/hub/provisioning/MojaloopHub_Setup) to perform all of the above steps in an automated way using the Mojaloop Testing Toolkit (TTK).
1. Set up simulator DFSPs for initial validation activities. \
   Mojaloop provides [provisioning scripts](https://github.com/mojaloop/testing-toolkit-test-cases/tree/master/collections/hub/provisioning/MojaloopSims_Onboarding) to perform this step in an automated way using the Mojaloop Testing Toolkit (TTK). 
1. Set up DFSPs in the Hub backend. For each DFSP:
    - Add DFSP and create a currency for it.
    - Add callback URLs for all API services.
    - Add a Net Debit Cap and set initial Position to 0.
    - Configure DFSP notification emails. \
    Similar to previous steps, the configuration of DFSP details can also be done via a provisioning script.

## Testing and validation

As DFSPs moves forward in their onboarding journey, they are required to perform tests in each environment. Business validation and technical requirements both need to be met when testing. Details of business validation are defined in the Scheme Rules.

Here are some examples of the testing activities that DFSPs are expected to perform in the various pre-production environments:

* end-to-end integration and application layer validation against simulators
* end-to-end integration and application layer validation against real, friendly DFSPs
* security setup validation
* performance testing
* settlement process validation