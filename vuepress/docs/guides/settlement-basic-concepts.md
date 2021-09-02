# Basic concepts

This section collects key concepts and elements of the settlement management process.

## Liquidity cover

As described in the [Introduction](settlement-management-introduction.md), one of the characteristics of a real-time payments system is that creditor DFSPs are required to disburse funds to their customers before they are reimbursed by the debtor DFSP. To mitigate the risk that a creditor DFSP will not receive the funds that it is due, Mojaloop requires that debtor DFSPs should provide credible evidence that they have sufficient good funds to meet the obligations they incur as a consequence of transacting in the system.

This credible evidence is called *liquidity cover*. The Mojaloop system does not stipulate what forms it should take; and, for any given DFSP, it may take multiple forms. It might be:

- funds deposited in an account over which the Mojaloop Hub has some control
- a line of credit from another financial institution
- collateral of some other kind

However, any liquidity cover used in a Mojaloop scheme must have the following characteristics:

- It must be capable of being converted into settlement payments *immediately* on demand from the Mojaloop scheme.
- It must be attested to by reliable evidence in the Mojaloop scheme's possession.
- It must not be convertible by the DFSP into other forms (for example, by withdrawing funds from a bank account, or drawing down funds from a line of credit) without the prior knowledge and approval of the Mojaloop scheme.

The liquidity cover attributed to a given DFSP is liquidity cover for a given settlement model and currency, and is attributable to the scheme as a whole. That is to say that Mojaloop does not allow participants to maintain liquidity cover that is applicable only to their transfers with a specific DFSP or DFSPs.

When a DFSP asks the Mojaloop Hub to make a transfer, the Mojaloop Hub checks that the debtor DFSP has sufficient liquidity cover to guarantee that the transfer can be settled if it completes successfully. It does this by comparing the DFSP's total good funds against the sum of the following items:

1. The sum of transfers which have been completed but not yet settled, and to which the DFSP is *either* the creditor *or* the debtor party.
1. The sum of transfers which have been started but which have not yet completed, and to which the DFSP is the debtor party.
1. The amount of the proposed transfer.

If the total of these three items is greater than the amount of good funds available to the debtor DFSP, then the transfer will be rejected by the Mojaloop Hub. Note that, in this arrangement, a DFSP's liquidity is credited with the effect of transfers where it is the beneficiary as soon as the transfer is completed, without needing to wait for the funds to be settled. Mojaloop does this to keep to a minimum the amount of liquidity that participants are required to maintain.

## Settlement model

Different schemes will want to settle funds between their participants in different ways. These will depend on who is operating the scheme, how much traffic there is through the scheme, and many other variables.

Mojaloop is designed to support the industry standard ways of settling between participants. These are as follows:

- Multilateral deferred net settlement
- Bilateral deferred net settlement
- Immediate gross settlement
 
Settlements are *deferred net* if a number of transfers are settled together. Net settements (in which a number of transfers are settled together) are by definition deferred (since it takes time to construct a batch.)

Settlements are *gross* if each transfer is settled separately. Gross settlements may be immediate or deferred. They are *deferred* if approval for settlement from outside the Hub is required, and *immediate* if the Hub can proceed to settlement of a transfer without requiring any external approval. At present, Mojaloop only supports immediate gross settlements.

Settlements are *bilateral* if each pair of participants settles with each other for the net of all transfers between them. Settlements are *multilateral* if each participant settles with the Hub for the net of all transfers to which it has been a party, no matter who the other party was.

A settlement model specifies a way in which a Mojaloop Hub will settle a set of transfers. In the simple case, there is only one settlement model and it settles all the transfers that are processed by the Hub. However, Mojaloop supports more than one settlement model for a single scheme. This allows, for instance, a scheme to define different settlement models for different currencies, or for different ledger account types.

If a scheme defines more than one settlement model, it is the responsibility of the scheme to ensure that a given transfer can only belong to a single settlement model. For example, suppose that a scheme defines a settlement model for all transfers that require currency conversion (defined as: all transfers where the source currency and the target currency are different from each other), and also a settlement model for all transfers where the source currency is Kenyan shillings (KES). In this case, a transfer which converted from Kenyan shillings to South African rand could potentially belong to both models.

## Settlement window

Every transfer that is completed in the Hub is assigned to the currently open settlement window. The settlement window is a way of grouping transfers together. Assigning transfers to a settlement window happens independently of the settlement models that are used to settle the transfers. This means that if a scheme has defined more than one settlement model, transfers that belong to the different settlement models will share a settlement window.

There is no deterministic way of assigning transfers to a particular settlement window. When a scheme administrator creates a new settlement window, there is no way to tell in advance which transfers will be assigned to the new settlement window and which transfers will be assigned to the old settlement window.

A settlement window can have the following states:

* `OPEN`: The settlement window is open, transfers are being accepted into the current open window.
* `CLOSED`: The settlement window is closed. It is not accepting any additional transfers and all new transfers are being allocated to a new, open settlement window.
* `PENDING_SETTLEMENT`: The settlement window is closed, the [Multilateral Net Settlement Positions](#multilateral-net-settlement-position) have been calcluated for each DFSP but settlement with the partner settlement bank has not happened yet. 
* `SETTLED`: The settlement bank has confirmed that all the participant DFSPs that engaged in transfers in the settlement window have settled their payments, and the Hub Operator has settled the window.

Closing a settlement window automatically opens the next one.

### Settlements and settlement windows

A Hub Administrator may request settlements for a given settlement model and for one or more settlement windows.

If a scheme only has a single settlement model, then settling transfers for that model in a given settlement window will settle all the transfers in that window. If, on the other hand, a scheme has defined more than one settlement model, then settling transfers belonging to a particular settlement model for a given settlement window will mean that some of the transfers in that window have been settled, while others have not.

It is particularly important to understand the implications of this where an Immediate Gross settlement model has been defined. In this case, individual transfers will be settled as soon as they have been completed. If the scheme only has an Immediate Gross settlement model, then all transfers will be settled as they are completed, and the settlement window will become irrelevant. If, on the other hand, the scheme mixes Gross and Net settlement models, or if the scheme has defined more than one Net settlement model, then it is possible for a given settlement window to contain some transfers which have been settled and some which have not been settled; and, in the case of transfers which are settled by a Gross settlement model, for transfers which have been settled to appear even in a currently open settlement window. This creates potential complications in defining the overall status of a settlement window.

Mojaloop deals with this situation by always assigning the settlement window a state which is the minimum state of the transfers within it. *Minimum state* is defined by the sequence of settlement window states given above. So, for instance, if a settlement window contains transfers which have already been settled (because they are settled Gross) and other transfers whose settlement process has not yet started, then the settlement window's state will be `OPEN`. If a settlement window has been closed, and it contains transfers which belong to two different settlement models, one of which is being settled (and whose state is therefore `PENDING_SETTLEMENT`) and the other is not (and whose state is therefore `CLOSED`,) the overall state of the settlement window will be `CLOSED`.

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

<!--question: shall we call this Multilateral Net Settlement Position or Net Settlement Amount?-->

The Multilateral Net Settlement (MLNS) Position defines the amount that a DFSP "owes" or "is owed" to/from other DFSPs within a specific settlement window. 

The Multilateral Net Settlement Position is calculated when a settlement window is closed and it reflects the sum total of the transfer amounts sent and received by the DFSP. Only finalized transfers are taken into account (those with a `"COMMITTED"` state). It is calculated for each DFSP that transacted in the settlement window.

## Settlement reports

To facilitate DFSP reconciliation and settlement at the settlement bank, the Hub provides various settlement reports.

<!--question: do we want to talk about reports?-->

## Finance Portal

The [Finance Portal](busops-portal-introduction.md) (commonly referred to as "Finance Portal v2") is a web portal used by the Hub Operator to manage settlement-related processes on a daily basis. The portal provides functionality to:

* monitor details such as the balance, [Position](#position), [Net Debit Cap](#liquidity-management-net-debit-cap) of DFSPs
* update a DFSP's [Net Debit Cap](#liquidity-management-net-debit-cap)
* manage settlement windows
<!--* download reports-->
* record deposits to or withdrawals from DFSPs' liquidity accounts

::: tip NOTE
The Finance Portal currently only supports settlement processes that rely on the Deferred Net Settlement model.
:::