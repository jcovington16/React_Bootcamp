// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

// Understanding the difference between Class/Function Components
function Hello() {
  return (
    <div>
      <h1>Hello there!</h1>
      <h1>Hello there!</h1>
      <h1>Hello there!</h1>
    </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'))
