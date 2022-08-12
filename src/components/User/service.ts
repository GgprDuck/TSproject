import { Types, Document , UpdateResult, DeleteResult} from 'mongoose';
import {UserModel, IUser} from './model';

function findAll() : Promise<(Document<unknown, any, IUser> & IUser & {
    _id: Types.ObjectId;
})[]> {
    return UserModel.find({}).exec();
}

function findById(id:string) : Promise<(Document<unknown, any, IUser> & IUser & {
    _id: Types.ObjectId;
}) | null>  {
    return UserModel.findById(id).exec();
}

function create(profile:object) : Promise<Document<unknown, any, IUser> & IUser & {
    _id: Types.ObjectId;
}>  {
    return UserModel.create(profile);
}

function updateById(_id:string, newProfile:object) : Promise<UpdateResult> {
    return UserModel.updateOne({ _id }, newProfile).exec();
}

function deleteById(_id:string) : Promise<DeleteResult> {
    return UserModel.deleteOne({ _id }).exec();
}

export = {
    findAll,
    findById,
    create,
    updateById,
    deleteById,
}