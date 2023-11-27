import { updateItem } from '../controllers/controlers'
import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    item: {type: String, required: true},
    value: {type: String, required: true},
    date: {type: String, required: true},
    type: {type: String, required: true},
    responsible: {type: String, required: true}
})

export const ItemModel = mongoose.model('Item', itemSchema)

export const getItens = () => ItemModel.find()
export const getItemByItem = (item: string) => ItemModel.findOne({ item })
export const getItemByDate = (date: string) => ItemModel.findOne({ date })
export const getItemById = (id: string) => ItemModel.findById(id)
export const createItem = (values: Record<string, string>) => new ItemModel(values).save().then((item) => item.toObject())
export const deleteById = (id: string) => ItemModel.findOneAndDelete({_id: id})
export const updateItemById = (id: string, values: Record<string, string>) => ItemModel.findByIdAndUpdate(id, values, {new:true}).exec().then((updateItem) => {
    if(!updateItem){
        console.log('error')
    } return updateItem.toObject()
})