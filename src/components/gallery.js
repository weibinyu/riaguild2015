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
    FILTER_ALL = 'all',
    FILTER_TAKEN = 'taken',
    FILTER_AVAILABLE = 'available';


var Gallery = React.createClass({
    
    mixins: [Navigation],
    
    getInitialState:function(){
        return {
            filters: [
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
            ]
        };
    },
 
    getIconBoxesHTML: function(){
        
        var filterFunction = {
                [FILTER_AVAILABLE]: (icon) => { return usedicons.hasOwnProperty(icon) === false;},
                [FILTER_TAKEN]: (icon) => { return usedicons.hasOwnProperty(icon);}
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
    
    render: function(){
        var self = this,
            radioButtons = this.state.filters.map(function(filter, i){
            return (<label key={i}>
                        {filter.labelText}
                        <input type="radio" name="icon-filter" checked={self.props.params.filter === filter.filterName} onChange={self.redirectToFilter.bind(self, filter.filterName)}/>
                    </label>);
        });
        
        return (
            <div>
                <p>These are the icons you can choose from, apart from the red ones as they are already taken!</p>
                <form>
                    {radioButtons}
                </form>
                <div className="iconboxes">{this.getIconBoxesHTML()}</div>
            </div>
        );
    }
});

module.exports = Gallery;