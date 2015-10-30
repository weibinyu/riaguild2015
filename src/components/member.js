
var React = require("react"),
	_ = require("lodash"),
	Link = require("react-router").Link,
	members = require("../data/members");

var Member = React.createClass({
	render: function(){
		var data = members[this.props.params.name],
			posts = data.blogposts.map(function(post,n){
				return <li key={n}><a target="_blank" href={post.url}>{post.title+" ("+post.when+")"}</a></li>;
			});
		return (
			<div>
				<Link to="/">Back to list</Link>
				<h3>{data.name}</h3>
				<p><img src={"http://units.wesnoth.org/1.10/pics/core$images$units$"+data.icon+".png"} alt={data.icon} title={data.icon} /></p>
				<p>{data.presentation}</p>
				<h3>Contact</h3>
				Github: {data.github}, Slack: {data.slack}
				{data.projectrepo && (
					<div>
						<h3>Project</h3>
						{data.projectdesc+" "} 
						  (<a href={"http://github.com/"+data.github+"/"+data.projectrepo}>code</a>) 
						  (<a href={"http://"+data.github+".github.io/"+data.projectrepo}>run</a>) 
					</div>
				)}
				<h3>Blog posts:</h3>
				<ul>{posts}</ul>
			</div>
		);
	}
});

module.exports = Member;
