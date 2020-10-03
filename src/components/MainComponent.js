import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomeComponent'
import Menu from './LeftMenuComponent';
import '../App.css'
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        const {
            location,
          } = this.props;

        return (
            <div className="main">
                <Header />
                <Menu />
                <Switch location={location}>
                    <Route path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
