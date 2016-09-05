import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.totalSeconds === 'undefined') {
      
    }
  }
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
  render() {
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(this.props.totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
}


Clock.defaultProps = {
  totalSeconds: 0
}

export default Clock;
