import { GlobalKeyboardListener } from "node-global-key-listener"

const v = new GlobalKeyboardListener()

let CTRL = false

let CTRL_V = false

let count = 1

let KEY = "B"

v.addListener( function (e) {

	// console.log( count );count++

	let state = e.state == "DOWN" ? "DOWN" : "UP"

	if( e.name == "LEFT CTRL" && state == "DOWN" ){

		// if( !CTRL ) console.log( e.name,state,count )
		CTRL = true

	}
	else if( e.name == "LEFT CTRL" && state == "UP" ){

		// if( CTRL ) console.log( e.name,state,count )
		CTRL   = false
		CTRL_V = false

	}else if( e.name == KEY && state == "UP" ){

		CTRL_V = false

	}

	if( e.name == KEY && CTRL && state == "DOWN" ){

		if( !CTRL_V ) console.log( "...", e.name, state, CTRL,count )
		CTRL_V = true

	}

})
