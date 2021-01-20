class JSXDemo extends React.Component {
  render() {
    return (
      // Only can return a single element
      <div>
        <img src="vladimir-gladkov-JC5_1k42h4I-unsplash.jpg" />
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))
