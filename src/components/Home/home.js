import React, { Component } from 'react';
import './home.css'
import Banner from '../Banner/banner'
import Category from '../../containers/Categories/categories'

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Banner/>
            <Category/>
            </>
        );
    }
}
 
export default Home;