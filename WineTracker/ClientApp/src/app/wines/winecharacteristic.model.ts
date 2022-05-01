import { WineTrait } from "./winetrait.enum";

export class WineCharacteristic {
	public id: string;
	public name: string;
	public description: string;
	public trait: WineTrait;
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
	}

	public getName(): string {
		switch (this.trait) {
			case WineTrait.Sweetness:
				return "Sweetness";
			case WineTrait.Acidity:
				return "Acidity";
			case WineTrait.Alcohol:
				return "Alcohol";
			case WineTrait.Body:
				return "Body";
		}
	}
}
