import express from 'express'
import items from './items'

const routerReceita = express.Router()

export default (): express.Router => {
    items(routerReceita)
    return routerReceita
}