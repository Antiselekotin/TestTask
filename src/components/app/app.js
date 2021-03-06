import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import Menu from '../menu'
import FirstScreen from '../first-screen'
import SecondScreen from '../second-screen';
import ThirdScreen from '../third-screen';
import ClientServise from '../../servises/client-servies';

import './app.scss';
import FourthScreen from '../fourth-screen/fourth-screen';
import Footer from '../footer';
import Modal from '../modal'
import ExtraMenu from '../extra-menu';


const App = ({more, max, getSize, set_position}) => {
    const clientServise = new ClientServise();
    useEffect(() => {
        clientServise.getUsers(getSize)
            .then(({users, total_users}) => { 
                max(total_users)
                more(users)})
        clientServise.getPositions()
                .then(({positions}) => set_position(positions))
    }, [getSize]);
    return (
        <div className="app">
            <Modal/>
            <div className='subcontainer'>
                <Menu/>
                <ExtraMenu/>
                <div className='container'>
                <FirstScreen/>
                <SecondScreen/>
                <ThirdScreen/>
                <FourthScreen/>
                <Footer/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({getSize}) => ({getSize})
export default connect(mapStateToProps, actions)(App);