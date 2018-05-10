import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
	render(){
		const style = styles.zone
		let zips = this.props.currentZone.zipCodes.map((z, i)=> {
			if(i == this.props.currentZone.zipCodes.length - 1){
				return (z)
			}
			return ( z + ', ' )
		})
		return (
			<div style={style.container}>
				<h2 style={style.header2}>
					<a style={style.link} href="#">{ this.props.currentZone.name }</a>
				</h2>
				<span className="detail">{ zips }</span><br />
				<span className="detail">{ this.props.currentZone.numComments } Comments</span>
			</div>
		)
	}
}

export default Zone
