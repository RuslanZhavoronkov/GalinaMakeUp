import { useReducer } from "react"


export type updateHairACType = ReturnType<typeof updateHairAC>
type ActionJobsType = updateHairACType

type JobsStateType = {
    hair: string
    faceMakeUp: string
    photoJob: string
}

const initialState = {
    hair: 'bunch',
    faceMakeUp: 'evening',
    photoJob:'https://vk.com/galina_makeup69?z=photo-22918078_457257196%2Fwall126944135_12934'
}



export const jobsReducer = (state: JobsStateType = initialState, action: ActionJobsType): JobsStateType => {
    switch (action.type) {
case 'UpdateHair': {
    return {...state, hair:action.payload.hair}
}

default:  {
    return state
}
    }
}


//action create
export const updateHairAC = () => {
    return {
        type: 'UpdateHair',
        payload: {
            hair: 'collected'
        }
    } as const 
}

export const updateFaceMakeUp = () => {
    return {
        type: 'UpdateFaceMakeUp',
        payload: {
            faceMakeUp:'wedding'
        }
    }
}
