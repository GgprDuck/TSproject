import UserModel from './model';

function findAll() : Promise<UserModel>{
    return UserModel.find({}).exec();
}

function findById(id:string) : Promise<UserModel> {
    return UserModel.findById(id).exec();
}

function create(profile:object) : Promise<UserModel>  {
    return UserModel.create(profile);
}

function updateById(_id:string, newProfile:object) : Promise<void>{
    return UserModel.updateOne({ _id }, newProfile).exec();
}

function deleteById(_id:string) : Promise<void> {
    return UserModel.deleteOne({ _id }).exec();
}

export = {
    findAll,
    findById,
    create,
    updateById,
    deleteById,
}