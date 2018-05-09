import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'

const title = 'Wurd up?';
console.log('Wurd, this is the index.js entrypoint');

class App extends Component {
	render(){
		return (
			<div>{title}<Home /></div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

module.hot.accept();
