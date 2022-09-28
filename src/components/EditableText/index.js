import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {text: false}

  onClickuser = () => {
    this.setState(prevState => ({text: !prevState.text}))
  }

  render() {
    const {text} = this.state

    const inputClass = text ? 'container' : 'input-container'

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="bottom">
            <input className={inputClass} />
            <button type="button" className="button" onClick={this.onClickuser}>
              {text ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default EditableText
