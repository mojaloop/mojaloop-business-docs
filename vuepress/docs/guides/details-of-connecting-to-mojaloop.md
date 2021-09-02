# Details of connecting to Mojaloop environments

This section provides background information about the steps involved in connecting to a Mojaloop environment. The information provided is written in a way so that DFSPs and the Hub can rely on PKI best practices and any proprietary tools and technologies that they prefer or have access to.

::: tip
Using Connection Manager (MCM), Payment Manager OSS, and the Infrastructre-as-Code (IaC) that deploys the components making up the Mojaloop ecosystem, many of the steps in the processes described below can be done in an automated way.
:::

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
