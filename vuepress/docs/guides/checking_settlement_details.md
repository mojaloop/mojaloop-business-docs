# Checking settlement details

The **Settlement > Settlements** page allows you to view certain details of settlements, such as:

* settlement identifier
* state of the settlement
* the total value of transactions
* the identifiers of the DFSPs involved in the transactions, as well as the associated Multilateral Net Settlement Position in the chosen period

![Checking settlement details](/check_settlement_details.png)

The **Settlements** page provides a list of settlements that you can filter using various search criteria:

* **Date**: Provides a drop-down list of time ranges. The default value is **Today**. \
\
The **Clear** option allows you to remove any date filters already applied.
* **From** and **To**: Displays the start time and end time of the time range selected in the **Date** field. When **Date** is set to **Custom Range**, you have to set the date and time yourself in the **From** and **To** fields.
* **State**: Provides a drop-down list of settlement states.
    * **Pending Settlement**: A new settlement consisting of one or more settlement windows has been created. The Multilateral Net Settlement Position due to/from each participant has been calculated.
    * **Ps Transfers Recorded**: The Hub has marked the affected transfers as `RECEIVED_PREPARE` in its internal records.
    * **Ps Transfers Reserved**: The Hub has marked the affected transfers as `RESERVED` in its internal records.
    * **Ps Transfers Committed**: The Hub has marked the affected transfers as `COMMITTED` in its internal records.
    * **Settling**: Settlement is ongoing.
    * **Settled**: Settlement has completed.
    * **Aborted**: The settlement could not be completed and should be rolled back.
* **Clear Filters** button: Allows you to remove all filters you applied.

As you apply search criteria, the list of results (settlements) is continuously updated.

The following details are shown:

* **Settlement ID**: The unique identifier of the settlement.
* **State**: The status of the settlement.
* **Total Value**: The total value of transactions within the settlement batch.
* **Open Date**: The date and time when the settlement was created in the Hub.
* **Last Action Date**: The date and time when the last action was taken on the settlement in the Hub (for example, funds have been reserved, funds have been committed).

To view details for a particular settlement, click the settlement in the results list. The **Settlement Details** pop-up window is displayed.

![Settlement details pop-up window](/settlement_details_popup.png)

The following additional details are shown:

* **DFSP**: The unique identifier of the DFSP.
* **Window ID**: The unique identifier of the settlement window being settled.
* **Debit**: Aggregated debit amount resulting from the transfers that the DFSP engaged in. <question: send transfers or receive transfer?>
* **Credit**: Aggregated credit amount resulting from the transfers that the DFSP engaged in. <question: send transfers or receive transfer?>

To view further details for a DFSP, click **View Net Positions**. The **Multilateral Net Settlement Position** pop-up window is displayed.

![](/mlns_position_popup.png)

The following additional details are shown:

* **Debit**: List of transfers with transfer amounts that are recorded as a debit for the DFSP. <question: send transfers or receive transfer?> 
* **Credit**: List of transfers with transfer amounts that are recorded as a credit for the DFSP. <question: send transfers or receive transfer?>