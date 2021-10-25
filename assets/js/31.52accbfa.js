(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{481:function(e,t,a){"use strict";a.r(t);var s=a(23),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"basic-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),a("p",[e._v("This section collects key concepts and elements of the settlement management process.")]),e._v(" "),a("h2",{attrs:{id:"liquidity-cover"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liquidity-cover"}},[e._v("#")]),e._v(" Liquidity cover")]),e._v(" "),a("p",[e._v("As described in the "),a("RouterLink",{attrs:{to:"/HubOperations/Settlement/settlement-management-introduction.html"}},[e._v("Introduction")]),e._v(", one of the characteristics of a real-time payments system is that creditor DFSPs are required to disburse funds to their customers before they are reimbursed by the debtor DFSP. To mitigate the risk that a creditor DFSP will not receive the funds that it is due, Mojaloop requires that debtor DFSPs should provide credible evidence that they have sufficient good funds to meet the obligations they incur as a consequence of transacting in the system.")],1),e._v(" "),a("p",[e._v("This credible evidence is called "),a("em",[e._v("liquidity cover")]),e._v(". The Mojaloop system does not stipulate what forms it should take; and, for any given DFSP, it may take multiple forms. It might be:")]),e._v(" "),a("ul",[a("li",[e._v("funds deposited in an account over which the Mojaloop Hub has some control")]),e._v(" "),a("li",[e._v("a line of credit from another financial institution")]),e._v(" "),a("li",[e._v("collateral of some other kind")])]),e._v(" "),a("p",[e._v("However, any liquidity cover used in a Mojaloop scheme must have the following characteristics:")]),e._v(" "),a("ul",[a("li",[e._v("It must be capable of being converted into settlement payments "),a("em",[e._v("immediately")]),e._v(" on demand from the Mojaloop scheme.")]),e._v(" "),a("li",[e._v("It must be attested to by reliable evidence in the Mojaloop scheme’s possession.")]),e._v(" "),a("li",[e._v("It must not be convertible by the DFSP into other forms (for example, by withdrawing funds from a bank account, or drawing down funds from a line of credit) without the prior knowledge and approval of the Mojaloop scheme.")])]),e._v(" "),a("p",[e._v("The liquidity cover attributed to a given DFSP is liquidity cover for a given settlement model and currency, and is attributable to the scheme as a whole. That is to say that Mojaloop does not allow participants to maintain liquidity cover that is applicable only to their transfers with a specific DFSP or DFSPs.")]),e._v(" "),a("p",[e._v("When a DFSP asks the Mojaloop Hub to make a transfer, the Mojaloop Hub checks that the debtor DFSP has sufficient liquidity cover to guarantee that the transfer can be settled if it completes successfully. It does this by comparing the DFSP’s total good funds against the sum of the following items:")]),e._v(" "),a("ol",[a("li",[e._v("The sum of transfers which have been completed but not yet settled, and to which the DFSP is "),a("em",[e._v("either")]),e._v(" the creditor "),a("em",[e._v("or")]),e._v(" the debtor party.")]),e._v(" "),a("li",[e._v("The sum of transfers which have been started but which have not yet completed, and to which the DFSP is the debtor party.")]),e._v(" "),a("li",[e._v("The amount of the proposed transfer.")])]),e._v(" "),a("p",[e._v("If the total of these three items is greater than the amount of good funds available to the debtor DFSP, then the transfer will be rejected by the Mojaloop Hub. Note that, in this arrangement, a DFSP’s liquidity is credited with the effect of transfers where it is the beneficiary as soon as the transfer is completed, without needing to wait for the funds to be settled. Mojaloop does this to keep to a minimum the amount of liquidity that participants are required to maintain.")]),e._v(" "),a("h2",{attrs:{id:"settlement-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settlement-model"}},[e._v("#")]),e._v(" Settlement model")]),e._v(" "),a("p",[e._v("Different schemes will want to settle funds between their participants in different ways. These will depend on who is operating the scheme, how much traffic there is through the scheme, and many other variables.")]),e._v(" "),a("p",[e._v("Mojaloop is designed to support the industry standard ways of settling between participants. These are as follows:")]),e._v(" "),a("ul",[a("li",[e._v("Multilateral deferred net settlement")]),e._v(" "),a("li",[e._v("Bilateral deferred net settlement")]),e._v(" "),a("li",[e._v("Immediate gross settlement")])]),e._v(" "),a("p",[e._v("The meaning of the component terms of these settlement types is as follows.")]),e._v(" "),a("p",[e._v("Settlements are "),a("em",[e._v("deferred net")]),e._v(" if a number of transfers are settled together. Net settements (in which a number of transfers are settled together) are by definition deferred (since it takes time to construct a batch.)")]),e._v(" "),a("p",[e._v("Settlements are "),a("em",[e._v("gross")]),e._v(" if each transfer is settled separately. Gross settlements may be immediate or deferred. They are "),a("em",[e._v("deferred")]),e._v(" if approval for settlement from outside the Hub is required, and "),a("em",[e._v("immediate")]),e._v(" if the Hub can proceed to settlement of a transfer without requiring any external approval. At present, Mojaloop only supports immediate gross settlements.")]),e._v(" "),a("p",[e._v("Settlements are "),a("em",[e._v("bilateral")]),e._v(" if each pair of participants settles with each other for the net of all transfers between them. Settlements are "),a("em",[e._v("multilateral")]),e._v(" if each participant settles with the Hub for the net of all transfers to which it has been a party, no matter who the other party was.")]),e._v(" "),a("p",[e._v("A settlement model specifies a way in which a Mojaloop Hub will settle a set of transfers. In the simple case, there is only one settlement model and it settles all the transfers that are processed by the Hub. However, Mojaloop supports more than one settlement model for a single scheme. This allows, for instance, a scheme to define different settlement models for different currencies, or for different ledger account types.")]),e._v(" "),a("p",[e._v("If a scheme defines more than one settlement model, it is the responsibility of the scheme to ensure that a given transfer can only belong to a single settlement model. For example, suppose that a scheme defines a settlement model for all transfers that require currency conversion (defined as: all transfers where the source currency and the target currency are different from each other), and also a settlement model for all transfers where the source currency is Kenyan shillings (KES). In this case, a transfer which converted from Kenyan shillings to South African rand could potentially belong to both models.")]),e._v(" "),a("h2",{attrs:{id:"settlement-window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settlement-window"}},[e._v("#")]),e._v(" Settlement window")]),e._v(" "),a("p",[e._v("Every transfer that is completed in the Hub is assigned to the currently open settlement window. The settlement window is a way of grouping transfers together. Assigning transfers to a settlement window happens independently of the settlement models that are used to settle the transfers. This means that if a scheme has defined more than one settlement model, transfers that belong to the different settlement models will share a settlement window.")]),e._v(" "),a("p",[e._v("There is no deterministic way of assigning transfers to a particular settlement window. When a scheme administrator creates a new settlement window, there is no way to tell in advance which transfers will be assigned to the new settlement window and which transfers will be assigned to the old settlement window.")]),e._v(" "),a("p",[e._v("A settlement window can have the following states:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("OPEN")]),e._v(": The settlement window is open, transfers are being accepted into the current open window.")]),e._v(" "),a("li",[a("code",[e._v("CLOSED")]),e._v(": The settlement window is closed. It is not accepting any additional transfers and all new transfers are being allocated to a new, open settlement window.")]),e._v(" "),a("li",[a("code",[e._v("PENDING_SETTLEMENT")]),e._v(": The settlement window is closed, the "),a("a",{attrs:{href:"#multilateral-net-settlement-position"}},[e._v("Multilateral Net Settlement Positions")]),e._v(" have been calcluated for each DFSP but settlement with the partner settlement bank has not happened yet.")]),e._v(" "),a("li",[a("code",[e._v("SETTLED")]),e._v(": The settlement bank has confirmed that all the participant DFSPs that engaged in transfers in the settlement window have settled their payments, and the Hub Operator has settled the window.")])]),e._v(" "),a("p",[e._v("Closing a settlement window automatically opens the next one.")]),e._v(" "),a("h3",{attrs:{id:"settlements-and-settlement-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settlements-and-settlement-windows"}},[e._v("#")]),e._v(" Settlements and settlement windows")]),e._v(" "),a("p",[e._v("A Hub Administrator may request settlements for a given settlement model and for one or more settlement windows.")]),e._v(" "),a("p",[e._v("If a scheme only has a single settlement model, then settling transfers for that model in a given settlement window will settle all the transfers in that window. If, on the other hand, a scheme has defined more than one settlement model, then settling transfers belonging to a particular settlement model for a given settlement window will mean that some of the transfers in that window have been settled, while others have not.")]),e._v(" "),a("p",[e._v("It is particularly important to understand the implications of this where an Immediate Gross settlement model has been defined. In this case, individual transfers will be settled as soon as they have been completed. If the scheme only has an Immediate Gross settlement model, then all transfers will be settled as they are completed, and the settlement window will become irrelevant. If, on the other hand, the scheme mixes Gross and Net settlement models, or if the scheme has defined more than one Net settlement model, then it is possible for a given settlement window to contain some transfers which have been settled and some which have not been settled; and, in the case of transfers which are settled by a Gross settlement model, for transfers which have been settled to appear even in a currently open settlement window. This creates potential complications in defining the overall status of a settlement window.")]),e._v(" "),a("p",[e._v("Mojaloop deals with this situation by always assigning the settlement window a state which is the minimum state of the transfers within it. "),a("em",[e._v("Minimum state")]),e._v(" is defined by the sequence of settlement window states given above. So, for instance, if a settlement window contains transfers which have already been settled (because they are settled Gross) and other transfers whose settlement process has not yet started, then the settlement window’s state will be "),a("code",[e._v("OPEN")]),e._v(". If a settlement window has been closed, and it contains transfers which belong to two different settlement models, one of which is being settled (and whose state is therefore "),a("code",[e._v("PENDING_SETTLEMENT")]),e._v(") and the other is not (and whose state is therefore "),a("code",[e._v("CLOSED")]),e._v(",) the overall state of the settlement window will be "),a("code",[e._v("CLOSED")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"liquidity-management-net-debit-cap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liquidity-management-net-debit-cap"}},[e._v("#")]),e._v(" Liquidity management (Net Debit Cap)")]),e._v(" "),a("p",[e._v("As described above, Mojaloop requires participants to pre-fund transfers where they are the debit party by providing credible evidence to the Mojaloop Hub that they can meet all their current settlement demands. There may, however, be circumstances in which a participant does not want all of its liquidity cover to be used as cover for transfers. For instance, a participant might be a recipient in a remittance channel and therefore an overall net creditor; or a participant might deposit extra funds to cover periods when their accounts are not open to receive funds.")]),e._v(" "),a("p",[e._v("To cover these possibilities, Mojaloop allows either participants or Hub Administrators to reserve part of their available liquidity cover, so that only part of it can be used to provide liqidity cover for transfers. This is called the Net Debit Cap (NDC). The NDC acts as a limit or a cap placed on a DFSP’s funds available for transacting, and it can never exceed the balance of the liquidity account. This is required to ensure that a DFSP’s liabilities can be met with funds immediately available to the settlement bank.")]),e._v(" "),a("p",[e._v("When calculating whether or not a transfer is covered by available liquidity, the Hub will take into account any restriction on the amount of available funds specified by the Net Debit Cap.")]),e._v(" "),a("h2",{attrs:{id:"position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[e._v("#")]),e._v(" Position")]),e._v(" "),a("p",[e._v("The Position of a DFSP reflects the total unsettled obligations of a DFSP for a given settlement model at a given point in time: that is to say, the amount of funds that a DFSP will eventually be required to settle with the scheme. A DFSP’s Position for a given settlement model is the net of the following elements:")]),e._v(" "),a("ol",[a("li",[e._v("All completed but unsettled transfers that belong to the settlement model and where the DFSP is the debtor party.")]),e._v(" "),a("li",[e._v("All completed but unsettled transfers that belong to the settlement model and where the DFSP is the creditor party.")]),e._v(" "),a("li",[e._v("All transfers that have been requested but have not yet completed which belong to the settlement model and where the DFSP is the debtor party.")])]),e._v(" "),a("p",[e._v("For the Payer DFSP, this sum total includes transfer amounts that are pending and have not yet been completed. Note that if an abort or timeout happens, the affected transfers will not complete and the reservation for that transfer will be removed.")]),e._v(" "),a("p",[e._v("The Position is the total position across all settlement windows that have not yet been settled. The amount of a participant’s position only changes when some of the transfers which make up its position are settled.")]),e._v(" "),a("h2",{attrs:{id:"net-settlement-positions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-settlement-positions"}},[e._v("#")]),e._v(" Net Settlement Positions")]),e._v(" "),a("p",[e._v("As described above, a deferred net settlement can be either multilateral or bilateral. When a Hub Administrator requests a settlement, the Hub will calculate how much each participant owes, or is owed, as a consequence of the transactions that are to be settled. The transactions to be settled are defined as all transactions which:")]),e._v(" "),a("ul",[a("li",[e._v("Belong to the settlement window(s) that are to be settled.")]),e._v(" "),a("li",[e._v("Belong to the settlement model that is being settled.")])]),e._v(" "),a("p",[e._v("If the settlement is "),a("em",[e._v("multilateral")]),e._v(", then a DFSP will receive only one figure as the amount it owes, or is owed, as a consequence of the settlement. This figure is the net of all the transactions to be settled.")]),e._v(" "),a("p",[e._v("If the settlement is "),a("em",[e._v("bilateral")]),e._v(", then a DFSP may receive multiple figures as the amount it owes, or is owed, as a consequence of the settlement. Each figure represents the net of the DFSP’s transactions with a particular DFSP. The net of all these values will be equal to the overall figure which it would owe, or be owed, in a multilateral net settlement.")]),e._v(" "),a("h2",{attrs:{id:"settlement-reports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settlement-reports"}},[e._v("#")]),e._v(" Settlement reports")]),e._v(" "),a("p",[e._v("To facilitate DFSP reconciliation and settlement at the settlement bank, the Hub provides various settlement reports. A Scheme can choose to have several different reports for different purposes. Below are some examples:")]),e._v(" "),a("ul",[a("li",[e._v("DFSP Settlement Report: A report issued to a DFSP when settlement has been initiated. It provides the DFSP’s bilateral settlement position with each DFSP they transacted with (either as a Payer DFSP or Payee DFSP) in the settlement window(s) being settled. It also provides the Multilateral Net Settlement Position of the DFSP (the sum total of the transfer amounts sent and received by the DFSP in the settlement window(s)).")]),e._v(" "),a("li",[e._v("Settlement Bank Report: A report issued to the settlement bank when settlement has been initiated. It provides the bilateral settlement position of each DFSP against every other DFSP that transacted in the settlement window(s) being settled. It also provides the Multilateral Net Settlement Position of each DFSP (the sum total of the transfer amounts sent and received by the DFSP).")]),e._v(" "),a("li",[e._v("DFSP Settlement Result Report: A report issued to a DFSP when settlement has been finalised. It provides details about the balance of the DFSP’s liquidity account, and the money movements arising from the closure of the settlement window.")])]),e._v(" "),a("h2",{attrs:{id:"finance-portal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finance-portal"}},[e._v("#")]),e._v(" Finance Portal")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/HubOperations/Settlement/busops-portal-introduction.html"}},[e._v("Finance Portal")]),e._v(" (commonly referred to as “Finance Portal v2”) is a web portal used by the Hub Operator to manage settlement-related processes on a daily basis. The portal provides functionality to:")],1),e._v(" "),a("ul",[a("li",[e._v("monitor details such as the balance, "),a("a",{attrs:{href:"#position"}},[e._v("Position")]),e._v(", "),a("a",{attrs:{href:"#liquidity-management-net-debit-cap"}},[e._v("Net Debit Cap")]),e._v(" of DFSPs")]),e._v(" "),a("li",[e._v("update a DFSP’s "),a("a",{attrs:{href:"#liquidity-management-net-debit-cap"}},[e._v("Net Debit Cap")])]),e._v(" "),a("li",[e._v("manage settlement windows"),a("br")]),e._v(" "),a("li",[e._v("record deposits to or withdrawals from DFSPs’ liquidity accounts")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The Finance Portal currently only supports settlement processes that rely on the Deferred Net Settlement model.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);