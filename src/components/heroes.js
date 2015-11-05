
var React = require("react"),
	_ = require("lodash"),
	Badge = require("./badge"),
	mem = require("../data/members"),
	members = mem.members,
	heroes = mem.heroes;

var Heroes = React.createClass({
	render: function(){
		return (
			<div>
				<p>These are the current heroes of the guild. Make sure to pay them proper reverence in the Slack channel!</p>
				<table>
					<thead>
						<tr><th>What</th><th>Who</th></tr>
					</thead>
					<tbody>
						<tr>
							<td>Our most prolific bloggers <br/> have written {heroes.blogposts[0]} posts:</td>
							<td>{ _.map(heroes.blogposts[1],function(id){ return <Badge key={id} id={id} />}) }</td>
						</tr>
						<tr>
							<td>Our most helpful members <br/> have made {heroes.pullrequests[0]} pull requests:</td>
							<td>{ _.map(heroes.pullrequests[1],function(id){ return <Badge key={id} id={id} />}) }</td>
						</tr>
						<tr>
							<td>Our wisest members have <br/> written {heroes.sageadvice[0]} sage advice:</td>
							<td>{ _.map(heroes.sageadvice[1],function(id){ return <Badge key={id} id={id} />}) }</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = Heroes;
