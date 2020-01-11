import React from "react";
import * as SRD from "@projectstorm/react-diagrams";
import { CableNodeModel } from "./CableNodeModel";

export interface CableNodeWidgetProps {
  node: CableNodeModel | null;
  size: { height: number; width: number };
}

export interface CableNodeWidgetState {}

export class CableNodeWidget extends React.Component<
  CableNodeWidgetProps,
  CableNodeWidgetState
> {
  rectangle: SVGRectElement | null | undefined;
  mounted: boolean = false;
  callback: (() => any) | undefined;

  public static defaultProps: CableNodeWidgetProps = {
    node:null,
    size: { height: 10, width: 100 }
  };

  constructor(props: CableNodeWidgetProps) {
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
      if (this.mounted && this.callback) {
        requestAnimationFrame(this.callback);
      }
    };
    requestAnimationFrame(this.callback);
  }

  componentWillMount() {
    this.mounted = false;
  }

  render() {
      if(!this.props.node){
          return<></>;
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
          {/* strokeWidth={2} stroke="rgba(0,0,0,1)" d="M0 0 h100 v20 h-100 z" */}
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
