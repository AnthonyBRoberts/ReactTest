import React, { Component } from 'react'
import Zone from '../presentation/Zone'
import superagent from 'superagent'

class Zones extends Component {
	constructor(){
		super()
		this.state = {
			zone: {name: '', zipCodes: '', numComments: 0},
			list: []
		}
	}

	componentDidMount(){
		superagent
		  .get('http://localhost:3000/api/zone')
		  .query(null)
		  .set('Accept', 'application/json')
		  .end((err, res) => {
		  	if (err){
		  		alert("Error" + err)
		  		return
		  	}
		  	this.setState({
				list: res.body.results
			})
		  })
	}

	submitZone(e){
		console.log("Wurd, submitZone button clicked" + JSON.stringify(this.state.zone))
		let newZone = Object.assign({}, this.state.zone)
		let ZoneList = Object.assign([], this.state.list)
		ZoneList.push(newZone)
		this.setState({
			zones: ZoneList
		})
	}

	updateZone(e){
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[e.target.id] = e.target.value
		this.setState({
			zone: updatedZone
		})
	}

	render(){
		const zones = this.state.list.map((z, i)=> {
			return (
				<li key={i}><Zone currentZone={z} /></li>
			)
		})
		return (
			<div>
				<ul>{zones}</ul>
				<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
				<input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="ZipCode" /><br />
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Post it!</button>
			</div>
		)
	}
}

export default Zones
