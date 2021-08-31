# Technical onboarding for DFSPs

At a high level, onboarding to a Mojaloop Hub requires a DFSP to focus their efforts around the following major milestones:

* Integration of their core backend with the Mojaloop Hub on the API level (this involves both coding and testing).
* Connecting to pre-production and production environments following rigorous Mojaloop security requirements.

This section provides a high-level overview of both.

::: tip
There are open-source tools available to facilitate both the API integration step and the connecting step.
:::

## API integration

Within the context of the Mojaloop Financial Service Provider Interoperability (FSPIOP) API, the transfer happens in three main steps corresponding to these three phases:

1. Identifying the Payee (party lookup or discovery phase)
1. Agreeing the transfer (quote or agreement phase)
1. Executing the transfer (transfer phase)

For further details on each of these phases, see **Module 2: Mojaloop in greater detail** of [Mojaloop training course](https://learn.mojaloop.io/) **DFSP-101**. <question: is there a Hub course equivalent?>

These three phases correspond to the key resources of the Mojaloop FSPIOP API:

* **Party lookup service**: Identifying the DFSP serving the Payee and the Payee itself (= the recipient of funds in a transaction) based on a Payee identifier (typically a MSISDN, that is, a mobile number).
* **Quotes service**: Requesting a quote and exchanging cryptographic proof to prepare and secure the transfer. A quote is a contract between a Payer DFSP and Payee DFSP for a particular financial transaction before the transaction is performed. It guarantees the agreement set by the Payer and Payee DFSPs about the Payer, the Payee, and transfer amount, and is valid during the lifetime of a quote and transfer of a specified financial transaction.
* **Transfers service**: Executing the transaction as per the agreed details and cryptographic proof.

DFSPs can choose to implement the asynchronous Mojaloop version of these API services, or a simplified, synchronous, Mojaloop-compliant version of them - leveraging the [Mojaloop-SDK](https://github.com/mojaloop/sdk-scheme-adapter) or [Payment Manager OSS](https://pm4ml.github.io/documents/payment_manager_oss/latest/index.html).

While the DFSP is carrying out offline development work, the Hub Operator's role consists in answering ad-hoc questions around the specifics of the API, or - depending on the open-source tool chosen and the agreed deployment model - can even extend to doing some of the development too.

Once the DFSP has completed coding, they test their integration against a lab instance in a test environment provided by the Hub. This is where the [connection phase](#connecting-to-mojaloop-environments) of the technical onboarding journey begins, with a new set of responsibilities for the Hub Operator. 

## Connecting to Mojaloop environments

Before going into the details of what connecting a DFSP to a Mojaloop environment entails, it is important to understand the security requirements of Mojaloop.

Any implementation of Mojaloop employs the following security measures:

* **Transport Layer Security** is a secure mechanism for exchanging a shared symmetric key over a network between two anonymous peers, with identity verification (that is, trusted certificates). It provides confidentiality (no one has read the content) and integrity (no one has changed the content). Mojaloop requires two-way TLS mutual authentication using X.509 certificates for securing bi-directional connections. DFSPs and the Mojaloop Hub authenticate each other to ensure that both parties involved in the communication are trusted. Both parties share their public certificates with each other and then verification/validation is performed based on that. 
* Another security measure that is offered for authentication is the **OAuth tokens** that DFSPs are required to use when making an API call request. OAuth 2 is used to provide role-based access to Mojaloop Hub endpoints (API authorization).
* **IP address whitelisting** reduces the attack surface of the Mojaloop Hub.
* To protect the application level, Mojaloop implements **JSON Web Signature (JWS)** as defined in [RFC 7515 (JSON Web Signature (JWS))](https://tools.ietf.org/html/rfc7515), the standard for integrity and non-repudiation. Signing messages ensures the Payer DFSP and the Payee DFSP can trust that messages shared between each other have not been modified by a third party. 
* The Mojaloop FSPIOP API implements support for the **Interledger Protocol (ILP)**. ILP is built on the concept of conditional transfers, in which ledgers involved in a financial transaction from the Payer to the Payee can first reserve funds out of a Payer account and later commit them to the Payee account. The transfer from the Payer to the Payee account is conditional on the presentation of a fulfilment that satisfies the condition attached to the original transfer request. 

![Security overview](/security_overview.png)

Putting the above security measures into practice requires extensive information sharing and technical configuration from different teams at both the DFSP and the Mojaloop Hub. 

Using Connection Manager (MCM), Payment Manager OSS, and the Infrastructre-as-Code (IaC) that deploys the components making up the Mojaloop ecosystem, many of the steps in the process described below can be done in an automated way.

The next sections provide background information about the processes around the sharing of mTLS and JWS digital certificates, as well as endpoint information.

### Creating and sharing certificates

#### TLS certificates

Two-way or mutual TLS authentication (mTLS) relies on both parties (client and server) sharing their public certificates with each other and performing verification/validation based on that.

The following high-level steps describe how connection is established and data is transferred between a client and server in the case of mTLS:

1. The client requests a protected resource over the HTTPS protocol and the SSL/TLS handshake process begins.
1. The server returns its public certificate to the client along with a server hello. 
1. The client validates/verifies the received certificate. The client verifies the certificate through the Certificate Authority (CA) for CA-signed certificates.
1. If the server certificate was validated successfully, the server requests the client certificate.
1. The client provides its public certificate to the server.
1. The server validates/verifies the received certificate. The server verifies the certificate through the Certificate Authority for CA-signed certificates.

After completion of the handshake process, the client and server communicate and transfer data with each other, encrypted with the secret keys shared between the two during the handshake. 

<img src="/TLS_connection.svg" width="65%" height="65%" />

The above process requires that before connecting to any environment (pre-production or production), the DFSP and the Mojaloop Hub each complete the following steps.

1. Create a server certificate signed by your CA.
1. Share your server certificate and CA chain with the other party.
1. Install the other party's CA chain in your outbound firewall (validation/verification will happen against these installed certificates).
1. Generate a Certificate Signing Request (CSR) and share with the other party.
1. Sign the other party's CSR using your CA.
1. Share the signed client certificate as well as your CA's root certificate with the other party.
1. Install your own client certificate signed by the other party's CA in your outbound API gateway.
1. Install the root certificate of the other party's CA in your outbound API gateway.

#### JWS certificates

Whenever an API client sends an API message to a counterparty, the API client should sign the message using its JWS private key. After the counterparty receives the API message, it must validate the signature with the sending party's public JWS key. JWS is used by the receiving party to validate that the message came from the expected sender, and that it has not been modified in transit.

The above process requires that all DFSPs and the Mojaloop Hub itself have a JWS certificate and that before connecting to any environment (pre-production or production), the DFSP and the Mojaloop Hub each complete the following steps.

1. Create a keystore (to hold your certificate and private key), an asymmetric key pair (a public key and a private key), and an associated certificate that identifies you.
1. Share your JWS public key.
1. Install the other parties' (the Hub and all other DFSPs) JWS public key in your inbound gateway.
1. Install your JWS private key in your outbound gateway.

### Sharing endpoint information

The Mojaloop Hub and the DFSPs share endpoint information to:

* whitelist the other party's public IP addresses in firewall rules in order to allow traffic
* configure the other party's callback URLs in API gateways

Typically, access to any incoming and outgoing traffic for a DFSP will be controlled by the relevant Security team. The DFSP's firewall needs to be appropriately configured:

* to access the Mojaloop Hub in any environment where the DFSP and the Hub interact, and 
* for the Mojaloop Hub to make callbacks to the DFSP 

Apart from access to and from the Hub deployed in an environment, all other public access should be blocked to prevent any unauthorized/unwarranted access.

Accordingly, access to the Mojaloop Hub is also regulated. DFSPs have to share their IP/IP range from which calls will be made to the Hub so that the firewall on the Hub can be configured appropriately. The Security team within the DFSP should be able to provide that information.

### Obtaining an OAuth token

The Mojaloop Hub employs WSO2 technologies for integration between the Hub and DFSPs, and to provide a gateway to DFSPs. To connect to the various Hub environments, DFSPs must obtain access to WSO2. WSO2 offers an API Store portal where DFSPs can create API gateway accounts for application-level access, subscribe to APIs, and obtain OAuth tokens for use when interacting with the Mojaloop Hub.

## Testing and validation

As DFSPs moves forward in their onboarding journey, they are required to perform tests in each environment. Business validation and technical requirements both need to be met when testing. Details of business validation are defined in the Scheme Rules.

Here are some examples of the testing activities that DFSPs are expected to perform in the various pre-production environments:

* end-to-end integration and application layer validation against simulators
* end-to-end integration and application layer validation against real, friendly DFSPs
* security setup validation
* settlement process validation