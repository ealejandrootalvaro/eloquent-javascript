import {randomPick, buildGraph} from './utils';

export interface IParcles {
    place: string,
    address: string
}

export class VillageState {

    place: string;
    parcels: Array<IParcles>;

    constructor(place: string, parcels: Array<IParcles>) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination: string, roadGraph: any) {

        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }

        let parcels = this.parcels.map(p => {
            if (p.place != this.place) return p;
            return { place: destination, address: p.address }
        }).filter(p => p.place != p.address);
        return new VillageState(destination, parcels);
    }

    random(parcelCount: number = 5, roadGraph: Array<string>) {
        let parcels = [];
        for (let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({ place, address });
        }
        return new VillageState("Post Office", parcels);
    }
}