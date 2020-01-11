import * as SRD from "@projectstorm/react-diagrams";

export class CoreLinkModel extends SRD.DefaultLinkModel {
  width: number;
  constructor() {
    super("core");
    this.width = 5;
  }
}


