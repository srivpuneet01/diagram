import * as SRD from "@projectstorm/react-diagrams";

export class SimplePortFactory extends SRD.AbstractPortFactory {
	cb: (initialConfig?: any) => SRD.PortModel;

	constructor(type: string, cb: (initialConfig?: any) => SRD.PortModel) {
		super(type);
		this.cb = cb;
	}

	getNewInstance(initialConfig?: any): SRD.PortModel {
		return this.cb(initialConfig);
	}
}