import React, { Component, Fragment } from 'react';
import './style.css';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatingWinningsPaused: false,
      animatingWinningsIndex: 0,
    };
  }

  componentDidMount() {}

  winningsAnimateEnd() {
    const { animatingWinningsIndex } = this.state;
    const { list: winnings } = this.props;
    if (animatingWinningsIndex < winnings.length - 1) {
      this.setState({
        animatingWinningsIndex: animatingWinningsIndex + 1,
      });
    } else {
      this.setState({
        animatingWinningsIndex: 0,
      });
    }
    this.setState({
      animatingWinningsPaused: true,
    });
    setTimeout(() => {
      this.setState({
        animatingWinningsPaused: false,
      });
    }, 1000);
  }

  get animatingWinnings() {
    const { animatingWinningsIndex } = this.state;
    const { list: winnings } = this.props;
    const l = 5;
    if (animatingWinningsIndex < winnings.length - l) {
      return winnings.slice(
        animatingWinningsIndex,
        animatingWinningsIndex + l,
      );
    } else if (animatingWinningsIndex < winnings.length) {
      return winnings
        .slice(animatingWinningsIndex, winnings.length)
        .concat(winnings.slice(0, l - (winnings.length - animatingWinningsIndex)));
    } else {
      return [];
    }
  }

  render() {
    const { animatingWinningsPaused } = this.state;

    return (
      <Fragment>
        <div className="winnings-container">
          {this.animatingWinnings.length === 0 ? (
            <div>暂无中奖信息！</div>
          ) : (
            <div
              className={`${animatingWinningsPaused ? '' : 'winnings-animate'}`}
              onAnimationEnd={() => this.winningsAnimateEnd()}
            >
              {this.animatingWinnings.map((item, index) => (
                <div key={index} className="winnings-row">
                  {this.props.renderRow(item)}
                </div>
              ))}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
