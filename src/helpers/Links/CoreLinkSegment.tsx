import React from "react";
import { CoreLinkModel } from "./CoreLinkModel";

export class CoreLinkSegment extends React.Component<{
  model: CoreLinkModel;
  path: string;
  width:number;
}> {
  percentage: number;
  mounted: boolean = false;
  callback: (() => any) | undefined;
  circle: SVGCircleElement | null | undefined;
  path: SVGPathElement | null | undefined;

  constructor(props: Readonly<{ model: CoreLinkModel; path: string; width:number }>) {
    super(props);
    this.percentage = 0;
  }

  componentDidMount() {
    this.mounted = true;
    this.callback = () => {
      if (!this.circle || !this.path) {
        return;
      }
      this.percentage += 2;
      if (this.percentage > 0) {
        this.percentage = 0;
      }
      var point = this.path.getPointAtLength(
        (this.path.getTotalLength() * this.percentage) / 100
      );

      this.circle.setAttribute("cx", "" + point.x);
      this.circle.setAttribute("cy", "" + point.y);

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
    return <>
    <path ref={ref=>{this.path = ref}} strokeWidth={this.props.width} stroke="rgba(255,255,0,0.5)" d={this.props.path}>
        <circle ref={ref=>{this.circle = ref}} r={10} fill="orange"/>
    </path>
    </>;
  }
}
