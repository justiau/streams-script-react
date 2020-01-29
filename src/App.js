import React from 'react';
import './App.css';
import luffy from './luffy-face.jpg';
import deku from './deku-face.jpg';
import naruto from './naruto-face.jpg';

let request = new XMLHttpRequest();
request.open("GET", "https://gitcdn.xyz/repo/justiau/streams-script/master/bookmarklet.js", false);
request.send();

const script = request.responseText;
const text = "STREAMS Rego Script"
const images = [luffy,deku,naruto]

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
		return (
			<div className="App">
				<header className="App-header">
					<h1>ANU STREAMS Automatic Tutorial Registration</h1>
				</header>
				<body className="App-body">
					<div id="bookmarklets">
						<Bookmarklet index={0} text={text}/>
						<Bookmarklet index={0} text={text}/>
						<Bookmarklet index={0} text={text}/>
						<Bookmarklet index={0} text={text}/>
						<Bookmarklet index={0} text={text}/>
						<Bookmarklet index={0} text={text}/>
						<Bookmarklet index={0} text={text}/>
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
