import express from 'express'
import { deleteItem, getAllItems, register, updateItem } from '../controllers/controlers'

export default (router:express.Router) => {
    router.get('/clube', getAllItems)
    router.post('/clube/auth/register', register)
    router.delete('/clube/:id', deleteItem)
    router.patch('/clube/:id', updateItem)
}