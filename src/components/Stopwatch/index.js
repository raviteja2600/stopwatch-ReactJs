import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    condition: false,
    totalSeconds: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {condition} = this.state
    if (condition === true) {
      this.setState(prevState => ({
        totalSeconds: prevState.totalSeconds + 1,
      }))
    }
  }

  onClickStartButton = () => {
    this.setState({
      condition: true,
    })
  }

  onClickStopButton = () => {
    this.setState({
      condition: false,
    })
  }

  onClickResetButton = () => {
    this.setState({
      totalSeconds: 0,
      condition: false,
    })
  }

  render() {
    const {totalSeconds} = this.state
    const totalMinutes = parseInt(totalSeconds / 60)
    let minutes = '00'
    if (totalMinutes < 10) {
      minutes = '0'
      minutes += totalMinutes
    } else {
      minutes = toString(totalMinutes)
    }
    let seconds = '0'
    if (totalSeconds < 10) {
      seconds += totalSeconds
    } else if (totalSeconds >= 60) {
      const remainingSeconds = totalSeconds - minutes * 60
      if (remainingSeconds < 10) {
        seconds += remainingSeconds
      } else {
        seconds = ''
        seconds += remainingSeconds
      }
    } else {
      seconds = ''
      seconds += totalSeconds
    }
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-image"
            />
            <p className="container-heading">Timer</p>
          </div>
          <h1 className="timer">
            {minutes}:{seconds}
          </h1>
          <div className="buttons-container">
            <button
              className="button button-green"
              type="button"
              onClick={this.onClickStartButton}
            >
              Start
            </button>
            <button
              className="button button-red"
              type="button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              className="button button-yellow"
              type="button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
