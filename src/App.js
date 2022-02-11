import React,{useState} from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Navbar/Navbar';
import Routing from './components/Routing/Route';
import { createStore } from 'redux';
import reducer from './redux/reducers/reducer'
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

const store = createStore(reducer);

const App = () => {
    const [showCart, setShowCart] = useState(false);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);
    return (
        <Provider store={store}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Header handleShowCart={handleShowCart}/>
                    <Routing />
                    <Footer />
                </Router>
                <Cart showCart={showCart} handleCloseCart={handleCloseCart} handleShowCart={handleShowCart}/>
            </React.Suspense>
        </Provider>
    )
}

export default App; 