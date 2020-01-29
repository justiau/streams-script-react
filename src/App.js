import React from 'react';
import './App.css';
import luffy from './images/luffy-face.jpg';
import deku from './images/deku-face.jpg';
import naruto from './images/naruto-face.jpg';
import eleven11 from './images/taeyeon.jpg';
import blanc from './images/blanc.jpg';
import cidergirl from './images/cidergirl.jpg';
import tenki_no_ko from './images/tenki-no-ko.jpg';
import all_about_you from './images/all-about-you.jpg';
import breathe from './images/breathe.jpg';

let request = new XMLHttpRequest();
request.open("GET", "https://gitcdn.xyz/repo/justiau/streams-script/master/bookmarklet.js", false);
request.send();

const script = request.responseText;
const text = "STREAMS Rego Script"
const images = [eleven11,blanc,cidergirl,tenki_no_ko,all_about_you,breathe]
const imgStyle = {
	maxWidth: 260,
	maxHeight: 260,
	width: 'auto',
	height: 'auto'
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
		const startingIndex = 1;
		return (
			<div className="App">
				<header className="App-header">
					<h1>ANU STREAMS Automatic Tutorial Registration</h1>
				</header>
				<body className="App-body">
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
					<div id="setup">
						<h2>Setup</h2>
						<p>Simply click and drag any of the above images or the link above into your bookmarks.</p> 
					</div>
					<div id="usage">
						<h2>Usage</h2>
						<ol>
							<li>First login at <a href="https://cs.anu.edu.au/streams/index.php">streams</a></li>
							<li>Then click on the <i>'Streams Rego Script'</i> Bookmark</li>
							<li>Fill in the details with your preferences and click <i>'Start'</i></li>
						</ol>
						<p style={{"fontWeight":"bold"}}>
							Note: The page is not meant to refresh
						</p>
						<p>
							This script uses Axios to continually check the server code so there is no need to refresh the page itself.<br/>Once the tutorial is available, the script will click the Register button, and the page will then change.
						</p>
					</div>
					<p>By Justin Au</p>
				</body>
			</div>
		);
	}
}

export default App;
