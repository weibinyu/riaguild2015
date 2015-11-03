var React = require("react"),
    _ = require("lodash"),
    Link = require("react-router").Link,
    members = require("../data/members").members,
    icons = require("../data/icons.json"),
    Icon = require("./icon"),
    usedicons = _.reduce(members,function(ret,data,id){
        return Object.assign(ret,{[data.icon]:1});
    },{});

var Gallery = React.createClass({
    render: function(){
        var iconboxes = icons.map(function(icon,n){
            return (
                <span key={n} className={usedicons[icon]?"icon chosen":"icon"}>
                    <Icon icon={icon} />
                </span>
            );
        });
        return (
            <div>
                <p>These are the icons you can choose from, apart from the red ones as they are already taken!</p>
                <div className="iconboxes">{iconboxes}</div>
            </div>
        );
    }
});

module.exports = Gallery;