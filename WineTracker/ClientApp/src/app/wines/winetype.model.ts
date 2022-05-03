import { WineTypeValue } from "./winetypevalue.enum";

export class WineType {
	public value: WineTypeValue;
	public label: string;
	public isSelected: boolean;

	constructor(obj: any = {}) {
		const {
			value,
			label = "",
			isSelected = false
		} = obj;

		this.value = value;
		this.label = label;
		this.isSelected = isSelected;
	}
}
