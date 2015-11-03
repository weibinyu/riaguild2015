
var React = require("react"),
	_ = require("lodash"),
	members = require("../data/members").members,
	Icon = require("./icon"),
	markdown = require("markdown").markdown;

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<h3>Welcome!</h3>
				<p>
This is the student roster for the <a href="https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/" target="_blank">RIA JavaScript course</a> at <a href="http://lnu.se" target="_blank">Linnaeus University</a>. Github repo is <a href="https://github.com/krawaller/riaguild2015" target="_blank">here</a>.
				</p>
				<p>
The purpose of the guild is to easily find the classmates' projects, and also see their blog posts and pull requests.
				</p>
			</div>
		);
	}
});

module.exports = Home;
