import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import './style.scss';
import NavBar from 'src/components/NavBar';
import Portfolio from 'src/components/Portfolio';
import About from 'src/components/About';
import Background from 'src/components/Background';


export default function App() {
  const cursorRef = useRef();
  const pointRef = useRef();
  const mousePos = (e) => {
    cursorRef.current.setAttribute('style', `top: ${e.pageY - 10}px;
    left:${e.pageX - 10}px;`);
    pointRef.current.setAttribute('style', `top: ${e.pageY - 20}px;
    left:${e.pageX - 20}px;`);
  };
  return (
    <>
      <div onMouseMove={mousePos} className="app">
        <div ref={cursorRef} className="cursor-point" />
        <div className="cursor" ref={pointRef} />
        <NavBar />
        <div className="app__content">
          <Switch>
            <Route exact path="/">
              <Background />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

App.propTypes = {

};
