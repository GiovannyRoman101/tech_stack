import React,{Component} from 'react'
import {FlatList} from 'react-native'
import {connect} from 'react-redux'
import ListItem from './list_item.js'

class LibraryList extends Component{
	
	renderItem( {item} ) {
		return (
			<ListItem library = {item}></ListItem>
		)
	}
	render(){
		return (
			<FlatList
				data={this.props.libraries} // pass in the data you want rendered
				renderItem={this.renderItem} // Dictate how each item is rendered
				keyExtractor = {(library) => library.id.toString()}// Sets a key, or you'll get a warning
			/>
		)
	}
}
// gets state and maps it to props
const mapStateToProp = (state) =>{
	return {libraries: state.libraries}
}

export default connect(mapStateToProp)(LibraryList)