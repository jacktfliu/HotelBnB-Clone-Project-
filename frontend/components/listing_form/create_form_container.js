import React from 'react'
import { connect } from 'react-redux'
import { createListing } from '../../actions/listing_action'
import ListingForm from './listing_form'

const mSTP = (state) => ({
    listing: {
        title: '',
        price: '',
        description: '', 
        location: '',
        bedroom: '',
        bathroom: '',
        longitude: '',
        latitude: '',
        owner_id: state.session.id
    }
})

const mDTP = (dispatch) => ({
    createListing: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(ListingForm)