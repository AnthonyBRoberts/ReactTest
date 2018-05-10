import React, { Component } from 'react'

class CreateZone extends Component {
	constructor(){
		super()
		this.state = {
			zone: {name: '', zipCodes: '', numComments: 0}
		}
	}

	updateZone(e){
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[e.target.id] = e.target.value
		this.setState({
			zone: updatedZone
		})
	}

	submitZone(){
		let newZone = Object.assign({}, this.state.zone)
		let zips = newZone.zipCodes.split(',')
        let zipCodes = []
        zips.forEach(function(z){
            if(z.trim().length == 5){
                zipCodes.push(z.trim())
            }
        })
        newZone.zipCodes = zipCodes
		this.props.onCreate(newZone)
		this.setState({
			zone: {name: '', zipCodes: '', numComments: 0}
		})
	}

	render(){
		return (
			<div>
				<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
				<input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="ZipCode" /><br />
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Post it!</button>
			</div>
		)
	}
}

export default CreateZone
	