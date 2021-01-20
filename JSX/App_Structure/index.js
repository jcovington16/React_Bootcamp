class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Numpicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
