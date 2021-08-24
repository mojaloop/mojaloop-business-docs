# Basic concepts

This section collects key concepts and elements of the settlement management process.

## Liquidity account

As DFSPs perform transfers on their users' behalf, only e-money is debited/credited between them. To transfer actual funds, the Hub sets up a contractual agreement with a partner settlement bank, who carries out settlement instructions issued by the Hub. All participant DFSPs must maintain an account, called "liquidity account" (holding DFSPs' settlement liquidity), at the settlement bank. 

These bank accounts are dedicated to the settlement of transfers operated via the Hub, and may not be used for any other purpose. Once open, the liquidity account must be pre-funded with a contractually agreed value to cover the transfers expected during upcoming settlement periods ([settlement windows](#settlement-window)). 

In addition, each DFSP might be required to open an intermediary business account at the settlement bank even if their principal business account is held elsewhere, due to the specific nature of a liquidity account and its ability to participate in transactions beyond the settlement bank itself.

DFSPs undertake to maintain a contractually agreed minimum level of liquidity in their account. These funds are separate from DFSPs' various other commercial banking arrangements. DFSPs have the capability to add/withdraw funds to/from their liquidity account into their existing business account(s), potentially held at another bank, though this is subject to the contractually agreed minimum balance.

If a DFSP decides to leave the scheme, they are entitled to receive the balance of their liquidity account at the settlement bank. This is subject to confirmation by the Hub Operator that there are no unsettled transactions that the DFSP is a party to. If this is not the case, then the DFSP is not be able to leave the scheme until further settlement phases have been completed.

Once the Hub Operator has confirmed that there are no unsettled transactions, they forward a request to the settlement bank to transfer the remaining balance of the DFSP's liquidity account to an account nominated by the DFSP.

## Settlement model

When a transaction is marked as completed, from the view point of the end user (the individual paying or receiving money), money has been transferred from one account to another in real time. However, from the point of view of the DFSP, the funds have not yet been transferred from the Payer's financial institution to the Payee's financial institution.

Settlement is the process of transferring funds from one DSFP to another, so that the Payer's DFSP reimburses the Payee's DFSP for funds given to the Payee during the transaction. The scheme administrators define how settlement happens within the scheme, and this is referred to as the settlement model.

A settlement model specifies: 

* how the Hub settles a given set of ledger entries 
* how often settlement occurs

The Hub supports two settlement models:

* Deferred Net Settlement model
* Continuous Gross Settlement model

Deferred Net Settlement means the following:
    
* a group of transfers is settled together (see [Settlement window](#settlement-window))
* each participant settles with the scheme for the net of its transfers that are included in the settlement (multilateral settlement)
* settlement is actioned after a period of delay

Continuous Gross Settlement means the following:

* settlement is executed after each transfer is completed (therefore, [settlement windows](#settlement-window) do not exist in this model)
* each participant settles separately with the other participants and the scheme is not a party to the settlement (bilateral settlement)

## Settlement window

A settlement window is a time period between two successive settlements. It has a start time and an end time, and any transfers that go through (and reach a `"COMMITTED"` state) during the time that the settlement window is open will be settled in bulk after the settlement window has closed.

Transfers that take place in the same settlement window are settled in batch after the end of the settlement window.

A settlement window can have the following states:

* `OPEN`: The settlement window is open, transfers are being accepted into the current open window.
* `CLOSED`: The settlement window is closed. It is not accepting any additional transfers and all new transfers are being allocated to a new, open settlement window.
* `PENDING_SETTLEMENT`: The settlement window is closed, the [Multilateral Net Settlement Positions](#multilateral-net-settlement-position) have been calcluated for each DFSP but settlement with the partner settlement bank has not happened yet. 
* `SETTLED`: The settlement bank has confirmed that all the participant DFSPs that engaged in transfers in the settlement window have settled their payments, and the Hub Operator has settled the window.

Closing a settlement window automatically opens the next one.

::: tip NOTE
There are no settlement windows in the Continuous Gross Settlement model.
:::

## Liquidity management (Net Debit Cap)

Participant DFSPs are responsible for managing their liquidity at the settlement bank. When a participant's obligations exceed the funds it has available for liquidity cover, then transactions are declined by the Hub, and therefore fail.

When pre-funding their liquidity account, DFSPs define the maximum amount that they can "owe" to other DFSPs, this is called the Net Debit Cap (NDC). The NDC acts as a limit or a cap placed on a DFSP's funds available for transacting, and it can never exceed the balance of the liquidity account. This is required to ensure that a DFSP's liabilities can be met with funds immediately available to the settlement bank.

The [Position](#position) is continuously checked against the Net Debit Cap ((TransferAmount + Position) < = NDC) and if a transfer would cause the Position amount to exceed the NDC amount, the transfer is blocked.

## Position

The Position of a DFSP reflects – at a given point in time – the sum total of the transfer amounts sent and received by the DFSP. The Position is the sum of all outgoing transactions minus incoming transactions since the beginning of the settlement window, as well as any provisional transfers that have not yet been settled.

For the Payer DFSP, this sum total includes transfer amounts that are pending and have not been finalized (committed) yet (that is, transfers with the `"RESERVED"` state _will_ be taken into account). Note that if an abort or timeout happens, the affected transfers will not complete. For the Payee DFSP, the sum total includes only `"COMMITTED"` amounts. 

Each attempted outgoing transfer results in the Position being recalculated by the Hub in real time, which, in turn, is compared to the [Net Debit Cap](#liquidity-management-net-debit-cap). 

Once the settlement window is closed, then Positions are adjusted based on the settlement – the Position changes to the net amount of the transfers that were not initiated or not yet fulfilled when the settlement window was closed.

## Multilateral Net Settlement Position

<question: shall we call this Multilateral Net Settlement Position or Net Settlement Amount?>

The Multilateral Net Settlement (MLNS) Position defines the amount that a DFSP "owes" or "is owed" to/from other DFSPs within a specific settlement window. 

The Multilateral Net Settlement Position is calculated when a settlement window is closed and it reflects the sum total of the transfer amounts sent and received by the DFSP. Only finalized transfers are taken into account (those with a `"COMMITTED"` state). It is calculated for each DFSP that transacted in the settlement window.

## Settlement reports

To facilitate DFSP reconciliation and settlement at the settlement bank, the Hub provides various settlement reports.

<question: do we want to talk about reports?>

## Business Operations portal

The [Business Operations portal](busops_portal_introduction.md) (commonly referred to as "Finance Portal v2") is a web portal used by the Hub Operator to manage settlement-related processes on a daily basis. The portal provides functionality to:

* monitor details such as the balance, [Position](#position), [Net Debit Cap](#liquidity-management-net-debit-cap) of DFSPs
* update a DFSP's [Net Debit Cap](#liquidity-management-net-debit-cap)
* manage settlement windows
<!--* download reports-->
* record deposits to or withdrawals from DFSPs' liquidity accounts

::: tip NOTE
The Business Operations portal currently only supports settlement processes that rely on the Deferred Net Settlement model.
:::