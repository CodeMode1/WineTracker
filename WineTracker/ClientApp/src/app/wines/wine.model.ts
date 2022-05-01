import { WineCharacteristic } from "./winecharacteristic.model";
import { WineTrait } from "./winetrait.enum";

export class Wine {
    public id: string;
    public name: string;
    public type: string;
    public age: number;
	public production: string;
	public description: string;
	public characteristics: WineCharacteristic[];

    constructor(obj: any = {}) {
        const {
            id,
            name,
            type,
            age,
			production,
			description,
			characteristics = [
				new WineCharacteristic({ trait: WineTrait.Sweetness } as WineCharacteristic),
				new WineCharacteristic({ trait: WineTrait.Acidity } as WineCharacteristic),
				new WineCharacteristic({ trait: WineTrait.Tannin } as WineCharacteristic),
				new WineCharacteristic({ trait: WineTrait.Alcohol } as WineCharacteristic),
				new WineCharacteristic({ trait: WineTrait.Body } as WineCharacteristic)
			]
        } = obj;

        this.id = id;
        this.name = name;
        this.type = type;
        this.age = age;
		this.production = production;
		this.description = description;
		this.characteristics = [] as WineCharacteristic[];
		if (characteristics != undefined && characteristics.length) {
			for (const characteristic of characteristics) {
				this.characteristics.push(new WineCharacteristic(characteristic));
			}
		}
    }
}
