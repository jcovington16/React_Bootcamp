class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Hilery"
          from="Joshua"
          bangs={4}
          data={[1, 2, 3, 4, 5]}
          isFunny
          img="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"
        />
        <Hello to="Hilery" from="Joshua" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
