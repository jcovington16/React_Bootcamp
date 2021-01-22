class Slot extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props
    const winner = s1 === s2 && s2 === s3
    const colors = { fontSize: '50px', backgroundColor: 'purple' }
    return (
      // Use className instead of class which is a keyword in react
      <div className="Slot">
        <h1>Hi from Slot Machine</h1>
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <p className={winner ? 'win' : 'lose'}>
          {winner ? 'WINNER!' : 'LOSER'}
        </p>
      </div>
    )
  }
}
