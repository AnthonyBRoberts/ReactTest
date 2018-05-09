import React, { Component } from 'react'
import Zones from '../containers/Zones'
import Comments from './containers/Comments'

class Home extends Component {

	render(){
		return (
			<div className="container">
				Home Component, Wurd~!
				<div className="row">
					<div className="col-md-4"><Zones /></div>
					<div className="col-md-4"><Comments /></div>
				</div>
			</div>
		)
	}
}

export default Home