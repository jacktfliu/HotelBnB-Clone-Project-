import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'

class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            minGuest: 1,
        }
    }
    

    handleSubmit() {
        this.props.history.push('/listing')
    }

    handleChange(filter) {
        return e => this.props.updateFilter(filter, e.currentTarget.value)
    }

    listingPage(location) {
        this.props.updateFilter('location', location)
    }

    redirectListing(location){
        this.props.updateFilter('location', location)
        this.props.history.push(`/listings`) 
    }

    randomListing(){
        let locations = ["NewYorkCity", "Miami", "Chicago", "LosAngeles", "LasVegas", "AtlanticCity"]
        let location = locations[Math.floor(Math.random() * locations.length)]
        this.props.updateFilter('location', location)
        this.props.history.push('/listings')
    }

    render() {
        return (
        <div className='splash-container'>
            <div className='filter-box'>
                <div className='filter-container'>
                        {/* <div className='filter-button-search'>Where are you going?
                            <div className='search-drop-down'>
                                <ul className='search-drop-down-inside' disabled selected></ul>
                                <ul className='search-drop-down-inside' value='NewYorkCity' onClick={this.redirectListing.bind(this, "NewYorkCity")}>New York City</ul>
                                <ul className='search-drop-down-inside' value='Miami' onClick={this.redirectListing.bind(this, "Miami")}>Miami</ul>
                                <ul className='search-drop-down-inside' value='LasVegas' onClick={this.redirectListing.bind(this, "LasVegas")}>Las Vegas</ul>
                                <ul className='search-drop-down-inside' value='LosAngeles' onClick={this.redirectListing.bind(this, "LosAngeles")}>Los Angeles</ul>
                                <ul className='search-drop-down-inside' value='AtlanticCity' onClick={this.redirectListing.bind(this, "AtlanticCity")}>Atlantic City</ul>
                                <ul className='search-drop-down-inside' value='Chicago' onClick={this.redirectListing.bind(this, "Chicago")}>Chicago</ul>
                            </div>
                        </div>            */}
                    <div className='where-button'>Where are you going?   
                        <div className='dropdown'>                              
                            <div className='dropdown-content'>
                                <ul className='drop-down-inside' onClick={this.redirectListing.bind(this, "NewYorkCity")}>New York City</ul>
                                <ul className='drop-down-inside' onClick={this.redirectListing.bind(this, "Miami")}>Miami</ul>
                                <ul className='drop-down-inside' onClick={this.redirectListing.bind(this, "LasVegas")}>Las Vegas</ul>
                                <ul className='drop-down-inside' onClick={this.redirectListing.bind(this, "LosAngeles")}>Los Angeles</ul>
                                <ul className='drop-down-inside' onClick={this.redirectListing.bind(this, "AtlanticCity")}>Atlantic City</ul>
                                <ul className='drop-down-inside' onClick={this.redirectListing.bind(this, "Chicago")}>Chicago</ul>
                            </div>
                        </div>
                    </div>
                    <span></span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} className='filter-buttons'/>
                    <span></span>
                    <input type='date' min={new Date().toISOString().split('T')[0]} className='filter-buttons'/>
                    <span></span>
                    <select className='filter-button-guest'>
                        <option disabled selected>Guest</option>
                        <option value="1">1 guest</option>
                        <option value="2">2 guest</option>
                        <option value="3">3 guest</option>
                        <option value="4">4 guest</option>
                        <option value="5">5 guest</option>
                        <option value="6">6 guest</option>
                        <option value="7">7 guest</option>        
                    </select>
                    <span></span>
                    <div onClick={this.randomListing.bind(this)} className='filter-buttons-search'><i className="fas fa-search"></i></div>
                </div>
            </div>
            <div className='suprise-me-container'> 
                <div onClick={this.randomListing.bind(this)} className='suprise-me'>Suprise me</div>
            </div>
        </div>     
        )
    }
}

export default withRouter(Search);

