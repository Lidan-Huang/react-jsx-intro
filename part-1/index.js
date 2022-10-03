"use strict";

function H1() {
    return <h1>My very first component.</h1>;
}



function NameCom({ name }) {
    return <p>My name is {name}.</p>
}


function App() {
    return(
        <div>
            <H1 />
            <NameCom name = "Cat" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));


