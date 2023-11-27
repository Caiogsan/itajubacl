import express from 'express'
import { createItem, deleteById, getItens, updateItemById } from "../db/itens"

export const register = async (req:express.Request, res:express.Response) => {
    try {
        const { item, value, date, type, responsible } = req.body

        if(!item || !value || !date || !type || !responsible){
            console.log("missing item")
            return res.sendStatus(403)
        }

        const newItem = await createItem({
            item,
            value,
            date,
            type,
            responsible
        })

        return res.status(200).json(newItem).end()

    } catch (error) {
        console.log(`something happened: ${error}`)
        return res.sendStatus(400)
    }
}

export const getAllItems = async (req:express.Request, res:express.Response) => {
    try {
        const itens = await getItens()

        return res.status(200).json(itens)

    } catch (error) {
        console.log(`error fetching: ${error}`)
        return res.sendStatus(400)
    }
}

export const deleteItem = async (req:express.Request, res:express.Response) => {
    try {
        const { id } = req.params

        const deletedUser = await deleteById(id)
        return res.json(deletedUser)
    } catch (error) {
        console.log(error)
        return res.sendStatus(200)
    }
}

export const updateItem = async (req:express.Request, res:express.Response) => {
    try {
        
        const { id } = req.params
        const { item, value, date, type, responsible } = req.body

        if(!item || !value || !date || !type || !responsible){
            console.log('missing item')
            return res.sendStatus(403)
        }

        const updatedItem = await updateItemById(id, { item, value, date, type, responsible })

        return res.status(200).json(updatedItem).end()
        
    } catch (error) {
        console.log(error)
        return res.sendStatus(400)
    }
}