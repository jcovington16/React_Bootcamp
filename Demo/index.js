// class JSXDemo extends React.Component {
//   render() {
//     return (
//       // Only can return a single element
//       <div>
//         <img src="vladimir-gladkov-JC5_1k42h4I-unsplash.jpg" />
//       </div>
//     )
//   }
// }

function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Happy', 'Paranoid']
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
      // Only can return a single element
      <div>
        <h1>My Current Mood is: {getMood()}</h1>
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))
