import * as React from "react";

export interface IProps {
  firstName: string;
  lastName: string;
}

export default class Name extends React.Component<IProps> {
  public render() {
    return (
      <div>
        {this.props.firstName} {this.props.lastName}
      </div>
    );
  }
}
