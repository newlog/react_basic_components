import React, { useRef, useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomeComponent'
import Menu from './LeftMenuComponent';
import '../App.css'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import * as THREE from 'three';
import p5 from 'p5';
import FOG from 'vanta/dist/vanta.fog.min';


const Main = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(FOG({
            el: myRef.current,
            THREE: THREE,
            p5: p5,
            
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])

    return (
        <div ref={myRef}>
            <div className="main">
                <Header />
                <Menu />
                <Switch location={props.location}>
                    <Route path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        </div>
    )
  }


/*

class Main extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            THREE: THREE,
            p5: p5,
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

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
*/
export default Main;
 