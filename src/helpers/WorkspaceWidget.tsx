import * as React from "react";

export interface WorkspaceWidgetProps {
  buttons?: any;
}

export interface WorkspaceWidgetState {}
export class WorkspaceWidget extends React.Component<
  WorkspaceWidgetProps,
  WorkspaceWidgetState
> {
  constructor(props: WorkspaceWidgetProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="srd-demo-workspace">
        <div className="srd-demo-workspace__toolbar">{this.props.buttons}</div>

        <div className="srd-demo-workspace__content">{this.props.children}</div>
      </div>
    );
  }
}
