import React, {Component} from 'react';
import css from './Flash.scss';
import classnames from 'classnames';

class FlashBar extends Component {

  render(){
    const {items} = this.props;

    return (
      <div className={css.flashBar}>
        {(items||[]).map((item, i) => {
          return (
            <div key={i} className={classnames(css.flashBarItem, css[item.type] || css.flashInfo)} >
              {item.title ? <h3>{item.title}</h3> : null}
              {item.message ? <p>{item.message}</p> : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default FlashBar;
