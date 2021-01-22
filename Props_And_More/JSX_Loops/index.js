class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Josh" hobbies={['Reading', 'Working Out', 'Coding']} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
