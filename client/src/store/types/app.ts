
export interface Flat {
    type: string;
    id: number;
    attributes: {
        title: string,
        rooms: number,
        address: {
            city: string,
            street: string,
            house: string,
            room: string
        },
        area: number,
        unit: string
    };
    relationships: {
        type: string;
        id: number;
        attributes: {
            first_name: string,
            last_name: string,
            middle_name: string
        }
    }
}

export interface State {
    flats: Array<Flat>
}

export enum AppActionEnum {
    GET_DATA = 'GET_DATA'
}

export interface GetDataAction {
    type: AppActionEnum.GET_DATA;
    payload: Array<Flat>
}

export type AppAction = GetDataAction
