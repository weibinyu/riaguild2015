
var React = require("react"),
	_ = require("lodash"),
	Icon = require("./icon"),
	Link = require("react-router").Link,
	// transform to array and sort by name
	members = _.sortBy(_.map(require("../data/members").members,_.identity),"name");

var Home = React.createClass({
	render: function(){
		var rows = _.map(members,function(info,n){
			var id = info.id;
			return (
				<tr key={id}>
					<td><Icon icon={info.icon} /><Link to={"/member/"+id}>{info.name}</Link></td>
					<td>{info.blogposts.length}</td>
					<td>{info.pullrequests.length}</td>
				</tr>
			);
		});
		return (
			<div>
				<p>Ria guild! To join, find your preferred icon in the <Link to="/gallery">gallery</Link>!</p>
				<p>To see a list of the latest actions instead of this member list, click <Link to="/actions">here</Link>.</p>
				<table>
					<thead>
						<tr><th>Name</th><th>Posts</th><th>PR:s</th></tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Home;
