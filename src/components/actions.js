
var React = require("react"),
	_ = require("lodash"),
	Badge = require("./badge"),
	mem = require("../data/members"),
	members = mem.members,
	actions = mem.actions;

function ordernum(n){
	return n + ({1:"st",2:"nd",3:"rd"}[n % 10] || "th");
}

var Actions = React.createClass({
	nameFilterFunction: () => true,

	getInitialState: function() {
		return { filterName: "" };
	},
	handleNameFilterChange: function(event) {
		this.setState({ filterName: event.target.value });
		this.nameFilterFunction = (info) => { return members[info.by].name.slice(0, this.state.filterName.length).toUpperCase() == this.state.filterName.toUpperCase(); }
	},
	render: function(){
		var rows = _.map(actions.filter(this.nameFilterFunction),function(info,id){
			var user = members[info.by],
				tuser = members[info.target];
			return (
				<tr key={id}>
					<td><Badge id={user.github} /></td>
					<td>{info.when.substr(0,10)}<br/>{info.when.substr(11)}</td>
					<td>
						{ {pr:"made",post:"wrote"}[info.type]+" "+ordernum(info.number)+" "+{pr:"PR",post:"post"}[info.type]+(info.sageadvice?" (sage advice!)":"")+": " }
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
				<input type="text" placeholder="Filter..." value={this.state.filterName} onChange={this.handleNameFilterChange} />
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
