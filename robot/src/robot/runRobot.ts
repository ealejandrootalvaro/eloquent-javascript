import { VillageState } from './VillageState';

export interface IAction {
    direction: string,
    memory?: Array<string>
}

export function runRobot(state: VillageState, robot: (state: VillageState, memory?: Array<string>) => IAction, roadGraph: Array<Array<string>>, memory?: Array<string>) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction, roadGraph);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}