import { createState, useState, State } from '@hookstate/core';


const globalState = createState([]);
const wrapState = (s) => ({
    get: () => s,
    merge: (data) =>(s.merge([{data}])) ,
    
})

export const accessGlobalState = () => wrapState(globalState)
export const useGlobalState = () => wrapState(useState(globalState))
export const reSet = () => globalState.set([]);