const state = [

];

// This grabs the DOM element to be used to mount React components.
var headerNode = document.getElementById("header");
var contentNode = document.getElementById("contents");

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
          <h1><a href="/index.html">OverBored</a></h1>
      </header>
    );
  }
}

class Filters extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <p>Distance</p>
        <p>Price Range</p>
        <p>Number of People</p>
        <p>Activity Level</p>
        <p>Over 21?</p>
      </main>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<Header />, headerNode);
ReactDOM.render(<Filters />, contentNode);