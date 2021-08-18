import React, { useReducer, createContext, useRef, useContext } from 'react'

export interface ITransaction {
    id: number;
    title: string;
    amount: number;
    date?: Date;
}

const initialTransacitons: ITransaction[] = [
    {
        id: 1,
        title: "Glasses",
        amount: -200000,
    },
    {
        id: 2,
        title: "Macbook Pro 16",
        amount: -500000,
    }
]

function transactionReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.transaction)
        case "DELETE":
            return state.filter(t => t.id !== action.id)
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const TransactionStateContext = createContext(null)
const TransactionDispatchContext = createContext(null)
const TransactionNextIdContext = createContext(null)

export function TransactionProvider({ children }) {
    const [state, dispatch] = useReducer(transactionReducer, initialTransacitons)
    const nextId = useRef(2)

    return (
        <TransactionStateContext.Provider value={state}>
            <TransactionDispatchContext.Provider value={dispatch}>
                <TransactionNextIdContext.Provider value={nextId}>
                    {children}
                </TransactionNextIdContext.Provider>
            </TransactionDispatchContext.Provider>
        </TransactionStateContext.Provider>
    )
}

export function useTransactionState() {
    return useContext(TransactionStateContext)
}

export function useTransactionDispatch() {
    return useContext(TransactionDispatchContext)
}

export function useTransactionNextId() {
    return useContext(TransactionNextIdContext)
}