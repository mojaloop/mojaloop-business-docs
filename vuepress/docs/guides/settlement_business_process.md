# Settlement process

It is important to define a business process around settlement management. The following high-level process serves as an example that you can customize to the specifics of your organization's needs.

<table>
<caption><strong>Settlement</strong></caption>
<colgroup>
<col style="width: 14%" />
<col style="width: 85%" />
</colgroup>
<thead>
<tr class="header">
<th>Step</th>
<th>Details</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>1</p></td>
<td><p>The Hub Operator <a href="managing_windows.html#closing-a-settlement-window">closes the settlement window using the Business Operations portal</a>.</p></td>
</tr>
<tr class="even">
<td><p>2</p></td>
<td><p>The Hub Operator retrieves a DFSP Settlement Report for each DFSP that was active in the settlement window.</p></td>
</tr>
<tr class="odd">
<td><p>3</p></td>
<td><p>The Hub Operator emails the DFSP Settlement Report to each DFSP’s nominated contact points.</p></td>
</tr>
<tr class="even">
<td><p>4</p></td>
<td><p>DFSPs review their report and reconcile transactions against their own records in a timely manner.</p></td>
</tr>
<tr class="odd">
<td><p>5</p></td>
<td><p>The Hub Operator retrieves the Settlement Bank Report.</p></td>
</tr>
<tr class="even">
<td><p>6</p></td>
<td><p>The Hub Operator notifies settlement bank contact points that settlement can be enacted, sharing the Settlement Bank Report.</p></td>
</tr>
<tr class="odd">
<td><p>7</p></td>
<td><p>The settlement bank moves money between the settlement account and DFSPs' liquidity accounts, in accordance with the aggregated net Positions indicated in the Settlement Bank Report.</p></td>
</tr>
<tr class="even">
<td><p>8</p></td>
<td><p>The settlement bank confirms that money moved, and (since the Hub Operator has no visibility of the balance of accounts held at the settlement bank) shares the balance of each DFSP’s liquidity account.</p></td>
</tr>
<tr class="odd">
<td><p>9</p></td>
<td><p>The Hub Operator <a href="managing_windows.html#settling-a-settlement-window">settles the settlement window using the Business Operations portal</a>.</p></td>
</tr>
<tr class="even">
<td><p>10</p></td>
<td><p>The Hub Operator <a href="monitoring_dfsp_financial_details.html">verifies DFSP liquidity account balances against the balances shown in the portal</a>, and updates them if necessary, using the <a href="recording_funds_in_out.html">"add/withdraw funds" functionality of the portal</a>. Note that this may cause the DFSP’s NDC to be recalculated, potentially causing the DFSP’s outbound transactions to be declined by the Hub.</p></td>
</tr>
<tr class="odd">
<td><p>11</p></td>
<td><p>The Hub Operator retrieves the DFSP Settlement Result Report for each DFSP.</p></td>
</tr>
<tr class="even">
<td><p>12</p></td>
<td><p>The Hub Operator notifies each DFSP of the settlement result and their liquidity account balance by sending the DFSP Settlement Result Report to each DFSP.</p></td>
</tr>
</tbody>
</table>