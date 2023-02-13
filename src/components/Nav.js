import React, {useState} from "react";
import piggy from "../assets/porco.png";

const Nav = ({ hogs }) => {


const [toggleAttributes, setToggleAttributes] = useState(false)
const [toggleFilter, setToggleFilter] = useState(false)
const [toggleSort, setToggleSort] = useState(false)

function handleAttributes() {
	setToggleAttributes(!toggleAttributes)
}

function handleFilter() {
	setToggleFilter(!toggleFilter)
}

function handleSort(e) {
	setToggleSort(e.target.value)
}

const filterResults = hogs
.filter((hog) => (toggleFilter ? hog.greased : true)) 
.sort((hog1,  hog2) => {
	if (toggleSort === "Weight") {
		return hog1.weight - hog2.weight;
	} else if (toggleSort === "Name") {
		return hog1.name.localeCompare(hog2.name)
	}
})


const hogTiles = filterResults.map((hog) => {
	return (
		<div className="ui grid container" key={hog.name}>
		<button className="ui eight wide column" onClick={handleAttributes}>
			<p>{hog.name}</p>
		<img src={hog.image} alt={hog.image} style={{width: 500, height: 500}}></img>
		<div style={{display: toggleAttributes ? 'block' : 'none'}}>
		<p>{hog.specialty}</p>
		<p>{hog.greased.value}</p>
		<p>{hog.weight}</p>
		<p>{"highest medal achieved"}</p>
		</div>
		</button>
		</div>
	)
})


	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="field">
                            <label>Filter by Greased?</label>
                                <input type="checkbox" onChange={handleFilter} className="ui toggle checkbox"></input>
							<label>Filter by weight/name?</label>
							<select onChange={handleSort}>
								<option type="checkbox"  className="ui toggle checkbox" value="Weight">Weight</option>
								<option type="checkbox"  className="ui toggle checkbox" value="Name">Name</option>
								</select>
                        </div>
			<div>{hogTiles}</div>
		</div>
	);
};

export default Nav;
