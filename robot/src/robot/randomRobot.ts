import {VillageState} from './VillageState';
import {randomPick,buildGraph} from './utils';
import {IAction}  from './runRobot';

export const randomRobot = (roads: Array<string>) => {
    const roadGraph = buildGraph(roads);

    return (state: VillageState) : IAction => {
        return { direction: randomPick(roadGraph[state.place]) }
    }

}


