import {connect} from 'react-redux'
import Reservations from './reservation_index_item'
import { createReservation } from '../../actions/reservation_action'

const mSTP = (state) => ({
    reservation: {
        check_in_date: null,
        check_out_date: null,
        number_of_guest: 1,
        guest_id: state.session.id
    }
})

const mDTP = dispatch => ({
    createReservation: (reservation) => dispatch(createReservation(reservation))
})

export default connect(mSTP, mDTP)(Reservations)