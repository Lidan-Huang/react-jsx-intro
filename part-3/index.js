"use strict";

function Person({ name, age, hobbies }) {
    const ageMsg = (age >= 18);

    return(
        <div>
            <p> Learn some information about this person.</p>
            <h3>{ ageMsg ? "please go vote!" : "you must be 18."}</h3>
            <h3>{(name.length >= 8) ? name.slice(0, 6) : name}</h3>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}

function App() {
    return(
        <div>
            <Person name = "Mia" age = {21 } hobbies = {["running", "drawing"]} />
            <Person name = "Andy" age = {8 } hobbies = {["singing", "cooking"]} />
            <Person name = "Cat" age = {21 } hobbies = {["eating", "meow"]} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));