import React from 'react';
import './App.css';

import taeyeon from './images/taeyeon.jpg';
import blanc from './images/blanc.jpg';
import cidergirl from './images/cidergirl.jpg';
import weathering_with_you from './images/weathering_with_you.jpg';
import your_name from './images/your_name.jpg';
import puke from './images/puke.jpg';
import all_about_you from './images/all_about_you.jpg';
import breathe from './images/breathe.jpg';
import happy_now from './images/happy_now.jpg';
import red_ickle from './images/red_ickle.jpg';
import spring_day from './images/spring_day.png';
import january_rain from './images/january_rain.jpg';
import rain from './images/rain.jpg';

let request = new XMLHttpRequest();
request.open("GET", "https://justiau.github.io/streams-script/bookmarklet.js", false);
request.send();

const script = request.responseText;
const text = "STREAMS Rego Script";
const images = [blanc,all_about_you,breathe,january_rain,spring_day,weathering_with_you,taeyeon,rain,puke,red_ickle,cidergirl,happy_now,your_name];
const imgStyle = {
	maxWidth: 260,
	maxHeight: 260,
	width: 'auto',
	height: 'auto',
}

class Bookmarklet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: props.index,
			text: props.text
		}
	}

	updateIndex = () => {
		this.setState({index: this.state.index < images.length - 1 ? this.state.index + 1 : 0})
	}

	render() {
		console.log("render called new index: " + this.state.index);

		return (
			this.state.index >= 0 ?
			<a href={script} onMouseEnter={this.updateIndex}>
				<img
				src={images[this.state.index]}
				alt={this.state.text}
				style={imgStyle}
				/>
			</a> :
			<a href={script}>
				{this.state.text}
			</a>
		)
	}
}

class App extends React.Component {
	render() {
		const startingIndex = 0;
		return (
			<div className="App">
				<header className="App-header">
					<h1>ANU STREAMS Automatic Tutorial Registration</h1>
				</header>
				<body className="App-body">
					<div id="setup">
						<h2>Setup</h2>
						<p>Click and drag any of the below images or link into your bookmarks.</p> 
					</div>
					<div id="bookmarklets">
						<Bookmarklet index={startingIndex} text={text}/>
						<Bookmarklet index={startingIndex} text={text}/>
						<Bookmarklet index={startingIndex} text={text}/>
						<Bookmarklet index={startingIndex} text={text}/>
						<Bookmarklet index={startingIndex} text={text}/>
						<Bookmarklet index={startingIndex} text={text}/>
						<Bookmarklet index={startingIndex} text={text}/>
						<br/>
						<Bookmarklet text={text}/>
					</div>
					<div id="usage">
						<h2>Usage</h2>
						<ol>
							<li>First login at <a href="https://cs.anu.edu.au/streams/index.php" target="_blank" rel="noopener noreferrer">streams</a></li>
							<li>Then click on the <i>'Streams Rego Script'</i> bookmark</li>
							<li>Fill in the details with your preferences and click <i>'Start'</i></li>
						</ol>
					</div>
					<div id="notes">
						<p style={{"fontWeight":"bold"}}>
							Note: The page is not meant to refresh
						</p>
						<p>
							This script directly and continually checks the server without refreshing the page itself.<br/>Once the tutorial is available, the script will click the Register button, and then the page will reload.
						</p>
						<p>By Justin Au</p>
					</div>
				</body>
			</div>
		);
	}
}

export default App;
