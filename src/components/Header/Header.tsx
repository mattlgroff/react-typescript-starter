import * as React from 'react';
import HeaderProgress from '../HeaderProgress';
import './Header.scss';

export interface IProps {
  status: string;
  progress: number;
}

export default class Header extends React.Component<IProps> {
  public render() {
    return (
      <div className="header">
        <span className="header-status">{this.props.status}</span>
        <HeaderProgress progress={this.props.progress} />
      </div>
    );
  }
}
