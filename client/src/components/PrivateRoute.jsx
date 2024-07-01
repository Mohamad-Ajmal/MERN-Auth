import {  useSelector } from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom';


export default function PrivateRoute() {
    const {currentUser} = useSelector(state => state.user)
    // check it the current user is available so navigate to children which is profile through Outlet oterweise navigate to sign-in
    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
