class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Hilery" from="Joshua" />
        <Hello />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
