var React = require("react"),
    _ = require("lodash"),
    members = require("../data/members").members,
    icons = require("../data/icons.json"),
    Icon = require("./icon"),
    Badge = require("./badge"),
    usedicons = _.reduce(members,function(ret,data,id){
        return Object.assign(ret,{[data.icon]:data.id});
    },{});

var Gallery = React.createClass({
    render: function(){
        var iconboxes = icons.map(function(icon,n){

            return (
                <span key={n} className={usedicons[icon]?"icon chosen":"icon"}>
                    {
                        usedicons[icon] ?
                        <Badge id={usedicons[icon]} /> :
                        <Icon icon={icon} />
                    }
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