import "./index.css";
// import { App } from "./App/App";
import { render } from "react-dom";
// import React from 'react';
// import ReactDOM from 'react-dom/client';

function App(props) {
  return (
    <h1>
      {props.saludo}, {props.nombre}!
    </h1>
  );
}

function WithSaludo(saludo) {
  return function WrappedComponentWithSaludo(WrappedComponent) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando al WrappedComponent</p>
        </>
      );
    };
  };
}

const AppWithSaludo = WithSaludo('Wenas')(App);

const root = document.getElementById("root");
render(<AppWithSaludo nombre="Juanita" />, root);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
