function getNum() {
  return Math.floor(Math.random() * 10) + 1
}

class Numpicker extends React.Component {
  render() {
    const num = getNum()
    let msg
    if (num === 7) {
      msg = (
        <div>
          <h2>You are Lucky 🍀 !</h2>
          <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
        </div>
      )
    } else {
      msg = <p>Sorry Not So Lucky 🍀 </p>
    }
    return (
      <div>
        <h1>Your number is {num}</h1>
        {msg}
      </div>
    )
  }
}

ReactDOM.render(<Numpicker />, document.getElementById('root'))
