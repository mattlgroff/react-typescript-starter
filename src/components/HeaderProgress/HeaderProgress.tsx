import * as React from 'react';
import './HeaderProgress.scss';

export interface IProps {
  progress: number;
}

export default class HeaderProgress extends React.Component<IProps> {
  public render() {
    return (
      <div className="header-progress">
        <span className={this.props.progress === 1 ? 'active' : 'inactive'}>
          1
        </span>
        -
        <span className={this.props.progress === 2 ? 'active' : 'inactive'}>
          2
        </span>
        -
        <span className={this.props.progress === 3 ? 'active' : 'inactive'}>
          3
        </span>
      </div>
    );
  }
}
