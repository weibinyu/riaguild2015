
var React = require("react"),
	_ = require("lodash"),
	Badge = require("./badge"),
	mem = require("../data/members"),
	members = mem.members,
	actions = mem.actions;

var Heroes = React.createClass({
	render: function(){
		var blogger = members[mem.mostposts],
			helper = members[mem.mostprs],
			wisest = members[mem.wisest];
		return (
			<div>
				<p>These are the current heroes of the guild. Make sure to pay them proper reverence in the Slack channel!</p>
				<table>
					<thead>
						<tr><th>Who</th><th>What</th></tr>
					</thead>
					<tbody>
						<tr>
							<td><Badge id={blogger.id}/></td>
							<td>is the most prolific <strong>blogger</strong> with {blogger.blogposts.length} posts!</td>
						</tr>
						<tr>
							<td><Badge id={helper.id}/></td>
							<td>is the most <strong>helpful</strong> with {helper.pullrequests.length} pull requests!</td>
						</tr>
						<tr>
							<td><Badge id={wisest.id}/></td>
							<td>is the most <strong>wisest</strong> with {wisest.sageadvice.length} sage advice!</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Heroes;
