class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Setiawan" from="Vallerie" bangs={5} />
        <Hello to="Setiawan" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
