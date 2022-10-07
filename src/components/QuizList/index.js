// == Import npm
import React from 'react';
import { UserContext } from '../../context/userContext';
import {Outlet, useLocation, Navigate} from "react-router-dom";
// == Import
import './style.scss';
import { useContext } from 'react/cjs/react.production.min';

// == Composant
export default function QuizList() {
    
    // const {currentUser} = useContext(UserContext);
    // console.log("PRIVATE", currentUser);

    // if(!currentUser) {
    //     return <Navigate to="/" />
    // }

    return (
        <main className="quiz">
            <div className="quiz__container">
                {/* <Outlet /> */}
                quiz list
            </div>
        </main>
    );
}
