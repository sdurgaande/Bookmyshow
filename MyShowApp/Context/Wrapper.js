import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const Store = createContext()
export const MallSeatsContext = createContext()

export const Wrapper = ({ children }) => {
    const [seatsArray, setSeatsArray] = useState([]);
    const [data, setData] = useState();
    return (
        <Store.Provider value={{ data, setData }} >
            <MallSeatsContext.Provider value={[ seatsArray, setSeatsArray ]}>
                {children}
            </MallSeatsContext.Provider>

        </Store.Provider>
    )
}

