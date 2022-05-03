import { WineTrait } from "./winetrait.enum";

export class WineCharacteristic {
	public id: string;
	public name: string;
	public description: string;
	public trait: WineTrait; // or descriptor ?
	public level: number;

	constructor(obj: any = {}) {
		const {
			id,
			name,
			description,
			trait,
			level
		} = obj;

		this.id = id;
		this.name = name;
		this.description = description;
		this.trait = trait;
		this.level = level;

		this.setName();
	}

	private setName(): void {
		let name = "";
		switch (this.trait) {
			case WineTrait.Sweetness:
				name = "Sweetness";
				break;
			case WineTrait.Acidity:
				name = "Acidity";
				break;
			case WineTrait.Alcohol:
				name = "Alcohol";
				break;
			case WineTrait.Body:
				name = "Body";
				break;
		}

		this.name = name;
	}
}
