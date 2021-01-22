class Slot extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props
    const winner = (s1 === s2) && (s2 === s3)
    return (
      <div>
        <h1>Hi from Slot Machine</h1>
        <p>
          {s1} {s2} {s3}
        </p>
        <p>{winner ? 'WINNER!' : 'LOSER'} </p>
      </div>
    )
  }
}
