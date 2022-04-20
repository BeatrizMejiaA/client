import React from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    NavLink,
    Link
  } from 'react-router-dom';
import { startLogout } from '../../reducers/actions/auth';


export const Sidebar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch( startLogout () )
    }

    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> E-dent</span>
                </h3>

                <button 
                    className="btn"
                    onClick={ hanleLogout }
                >
                    Logout
                </button>

            </div>

            <div className="execute__create-patient">
                <Link to="/patient" className="active">Crear Paciente</Link>
            </div>
        </aside>
        
    )
}
