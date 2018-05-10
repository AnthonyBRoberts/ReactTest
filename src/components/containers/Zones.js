import React, { Component } from 'react'
import { Zone, CreateZone } from '../presentation/'
import { APIManager } from '../../utils'

class Zones extends Component {
	constructor(){
		super()
		this.state = {
			list: []
		}
	}

	componentDidMount(){
		APIManager.get('http://localhost:3000/api/zone', null, (err, res) => {
		  	if (err){
		  		alert("Error" + err.message)
		  		return
		  	}
		  	this.setState({
				list: res.results
			})}
		)
	}

	submitZone(zone){
        APIManager.post('http://localhost:3000/api/zone', zone, (err, res) => {
		  	if (err){
		  		alert("Error" + err.message)
		  		return
		  	}
			let ZoneList = Object.assign([], this.state.list)
			ZoneList.push(res.result)
			this.setState({
				list: ZoneList
			})
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
				<h2>Zones List</h2>
				<ul>{zones}</ul>
				<CreateZone onCreate={this.submitZone.bind(this)}/>
			</div>
		)
	}
}

export default Zones
