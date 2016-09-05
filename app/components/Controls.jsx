import React from 'react';

class Controls extends React.Component {
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  }
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps.countdownStatus);
  }

  render() {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        //why doesn't 'onClick' have to 'bind(this)'?
      } else if (countdownStatus === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
//       <div className="controls">
//         {renderStartStopButton()}
//         <button className="button alert hollow" onClick={() => this.onStatusChange('stopped')}>Clear</button>
//       </div>

    )
  }
};

export default Controls;


//-- ES5 ------
// var Controls = React.createClass({
//   propTypes: {
//     countdownStatus: React.PropTypes.string.isRequired,
//     onStatusChange: React.PropTypes.func.isRequired
//   },
//   onStatusChange: function (newStatus) {
//     return () => {
//       this.props.onStatusChange(newStatus);
//     }
//   },
//   render: function () {
//     var {countdownStatus} = this.props;
//     var renderStartStopButton = () => {
//       if (countdownStatus === 'started') {
//         return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
//       } else if (countdownStatus === 'paused') {
//         return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
//       }
//     };
//
//     return (
//       <div className="controls">
//         {renderStartStopButton()}
//         <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
//       </div>
//     )
//   }
// });
//
// module.exports = Controls;

//-- ES& ------

// class Controls extends React.Component {
//
//   onStatusChange(newStatus) {
//     console.log('In Controls - newStatus - : ', newStatus);
//     return () => {
//       this.props.onStatusChange(newStatus);
//     }
//   }
//
//   render() {
//     let { countdownStatus } = this.props;
//
//     let renderStartStopButton = () => {
//       if(countdownStatus === 'started') {
//         return <button className="button secondary" onClick={() => this.onStatusChange('paused')}>Pause</button>;
//       } else if (countdownStatus === 'paused') {
//         return <button className="button primary" onClick={() => this.onStatusChange('started')}>Start</button>
//       }
//     }
//
//     return (
//       <div className="controls">
//         {renderStartStopButton()}
//         <button className="button alert hollow" onClick={() => this.onStatusChange('stopped')}>Clear</button>
//       </div>
//     );
//   }
// }
//
// Controls.propTypes = {
//   countdownStatus: React.PropTypes.string.isRequired,
//   onStatusChange: React.PropTypes.func.isRequired
// }
//
// export default Controls;
