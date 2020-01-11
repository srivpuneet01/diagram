import React from "react";
import * as SRD from "@projectstorm/react-diagrams";
import { TerminalNodeModel } from "./TerminalNodeModel";

export interface TerminalNodeProps {
  node: TerminalNodeModel | null;
  size: { height: number; width: number };
}

export interface TerminalNodeState {}

export class TerminalNodeWidget extends React.Component<
  TerminalNodeProps,
  TerminalNodeState
> {
  rectangle: SVGRectElement | null | undefined;
  callback: (() => any) | null | undefined;
  mounted: boolean = false;

  public static defaultProps: TerminalNodeProps = {
    node: null,
    size: { height: 20, width: 50 }
  };

  constructor(props: TerminalNodeProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.mounted = true;
    this.callback = () => {
      if (!this.rectangle) {
        return;
      }

      this.rectangle.setAttribute("x", "0");
      this.rectangle.setAttribute("y", "0");
      this.rectangle.setAttribute("width", "" + this.props.size.width);
      this.rectangle.setAttribute("height", "" + this.props.size.height);
      if (this.mounted && this.callback) requestAnimationFrame(this.callback);
    };
    requestAnimationFrame(this.callback);
  }

  componentWillMount() {
    this.mounted = false;
  }

  render() {
    if (!this.props.node) {
      return <></>;
    }

    return (
      <div
        className={"diamond-node"}
        style={{
          position: "relative",
          width: this.props.size.width,
          height: this.props.size.height
        }}
      >
        <svg width={this.props.size?.width} height={this.props.size?.height}>
          <rect
            ref={ref => {
              this.rectangle = ref;
            }}
            strokeWidth={2}
            stroke="rgba(0,0,0,1)"
          />
        </svg>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: this.props.size.height / 2,
            left: 0
          }}
        >
          <SRD.PortWidget name="left" node={this.props.node} />
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            top: this.props.size.height / 2,
            left: this.props.size.width
          }}
        >
          <SRD.PortWidget name="left" node={this.props.node} />
        </div>
      </div>
    );
  }
}
