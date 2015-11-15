var React = require("react"),
    _ = require("lodash"),
    members = require("../data/members").members,
    icons = require("../data/icons.json"),
    Icon = require("./icon"),
    Badge = require("./badge"),
    Navigation = require('react-router').Navigation,
    usedicons = _.reduce(members,function(ret,data,id){
        return Object.assign(ret,{[data.icon]:data.id});
    },{}),
    filters = [
        {
            filterName: FILTER_ALL,
            labelText: 'Show all'
        },
        {
            filterName: FILTER_AVAILABLE,
            labelText: 'Show available'
        },
        {
            filterName: FILTER_TAKEN,
            labelText: 'Show taken'
        }
    ];


var Gallery = React.createClass({
    
    mixins: [Navigation],
 
    getIconBoxesHTML: function(){
        
        var filterFunction = {
                available: (icon) => { return usedicons.hasOwnProperty(icon) === false;},
                taken: (icon) => { return usedicons.hasOwnProperty(icon);}
            }[this.props.params.filter] || (() => true);
        
        return icons.filter(filterFunction).map(function(icon,n){
                
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
    },
    
    redirectToFilter: function(filter){
        this.props.history.pushState(null, '/gallery/' + filter);
    },
    
    getRenderButtonsHTML: function(){
        return filters.map(function(filter, i){
            return (
                <label key={i}>
                    {filter.labelText}
                    <input 
                        type="radio" 
                        name="icon-filter" 
                        checked={this.props.params.filter === filter.filterName} 
                        onChange={this.redirectToFilter.bind(this, filter.filterName)}/>
                </label>);
        }, this);
    },
    
    render: function(){
        return (
            <div>
                <p>These are the icons you can choose from, apart from the red ones as they are already taken!</p>
                <form>
                    {this.getRenderButtonsHTML()}
                </form>
                <div className="iconboxes">{this.getIconBoxesHTML()}</div>
            </div>
        );
    }
});

module.exports = Gallery;