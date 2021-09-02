# Managing settlement windows

The **Settlement Window Management** page allows you to:

* search for settlement windows based on multiple search criteria
* close an open settlement window
* settle a single window or settle multiple windows at once

A settlement window is a time period between two successive settlements. It has a start time and an end time, and any transfers that go through (and reach a `"COMMITTED"` state) during the time that the settlement window is open will be settled in bulk after the settlement window has closed.

Transfers that take place in the same settlement window are settled in batch after the end of the settlement window.


To access the **Settlement Window Management** page, go to **Settlement** > **Settlement Windows**.

![Managing settlement windows](/settlement_window_mgmt.png)

The **Settlement Window Management** page provides a list of settlement windows that you can filter using various search criteria:

* **Date**: Provides a drop-down list of time ranges. The default value is **Today**. \
\
The **Clear** option allows you to remove any date filters already applied.
* **From** and **To**: Displays the start time and end time of the time range selected in the **Date** field. When **Date** is set to **Custom Range**, you have to set the date and time yourself in the **From** and **To** fields.
* **State**: Provides a drop-down list of settlement window states:
    * **Open**: The settlement window is open, transfers are being accepted into the current open window.
    * **Closed**: The settlement window is closed. It is not accepting any additional transfers and all new transfers are being allocated to a new, open settlement window.
    * **Pending**: The settlement window is closed, but the settlement window still needs to be settled. A window can only be settled once the settlement bank has confirmed that all the participant DFSPs that engaged in transfers in the settlement window have settled their payments.
    * **Settled**: The settlement bank has confirmed that all the affected DFSPs have settled their obligations towards one another. Following confirmation, the Hub Operator has settled the settlement window.
    * **Aborted**: The settlement window was part of a settlement that got aborted. It is possible to add the aborted window to a new settlement. <!--question: is this OK?-->
    * **Clear**: Allows you to remove any window state filters already applied.
* **Clear Filters** button: Allows you to remove all filters you applied.

As you apply search criteria, the list of results (settlement windows) is continuously updated. The search results list displays the following details:

* Window selector: Only displayed for **Pending** settlement windows. Clicking the window selector activates the **Settle Selected Windows** button.
* **Window ID**: The unique identifier of the settlement window.
* **State**: The state of the settlement window.
* **Opened Date**: The date and time when the settlement window was opened.
* **Closed Date**: The date and time when the settlement window was closed.
* **Action**: **Close Window** button. Allows you to close a settlement window. This button is only displayed for **Open** settlement windows as only open windows can be closed.

## Closing a settlement window

To close an open settlement window, complete the following steps:

1. Go to the **Settlement Window Management** page.
1. Find the settlement window that you are looking for, using the search filters.
1. The open window will have a **Close Window** button displayed in the **Action** column. Click the **Close Window** button.

![Closing a settlement window](/settlement_window_mgmt_close.png)

Closing a window will:

* Set the state of the window to **Pending**.
* Automatically open a new window with the state of **Open**.

## Settling a settlement window

Once all the participants that engaged in the settlement window have settled their payments via the settlement bank, the settlement window can be settled. To settle a settlement window, complete the following steps:

**Prerequisites:**

* The settlement bank has confirmed that all the DFSPs that engaged in the settlement window have settled their payments.

**Steps:**

1. Go to the **Settlement Window Management** page.
1. Find the settlement window that you are looking for, using the search filters.
1. Click the window selector next to the settlement window(s) that you wish to settle. \
\
![](/settlement_window_mgmt_selector.png) \
\
This activates the **Settle Selected Windows** button. Click the **Settle Selected Windows** button. \
\
![](/settlement_window_mgmt_settle_button.png)
1. Check on the [**Settlement Management** page](checking-settlement-details.md) whether or not the settlement window has been settled successfully. Check the state of the relevant settlement, it should say **Settled**.