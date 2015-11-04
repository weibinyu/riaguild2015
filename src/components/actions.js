
var React = require("react"),
	_ = require("lodash"),
	Badge = require("./badge"),
	Link = require("react-router").Link,
	mem = require("../data/members"),
	members = mem.members,
	actions = mem.actions;

function ordernum(n){
	return n + ({1:"st",2:"nd"}[n % 10] || "rd");
}

var Actions = React.createClass({
	render: function(){
		var rows = _.map(actions,function(info,id){
			var user = members[info.by],
				tuser = members[info.target];
			return (
				<tr key={id}>
					<td><Badge id={user.github} /></td>
					<td>{info.when.substr(0,10)}<br/>{info.when.substr(11)}</td>
					<td>
						{ {pr:"made",post:"wrote"}[info.type]+" "+ordernum(info.number)+" "+{pr:"PR",post:"post"}[info.type]+": " }
						<br/>
						<a href={info.url} target="_blank">{info.description}</a>
					</td>
					<td>{info.target && <span><Badge id={tuser.github} /></span> || ""}</td>
				</tr>
			);
		});
		return (
			<div>
				<p>There's been {mem.numberofposts} posts and {mem.numberofprs} pull requests so far:</p>
				<table>
					<thead>
						<tr><th>Who</th><th>When</th><th>What</th><th>Target (if PR)</th></tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Actions;
