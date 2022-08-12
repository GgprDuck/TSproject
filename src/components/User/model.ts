import { Schema, model, connect } from 'mongoose';
import connections from '../../config/connection';

export interface IUser {
    fullName: string;
    email: string;
    collection : 'usermodel';
  }

const UserSchema = new Schema<IUser>({
    fullName:{type:String, required:true},
    email: { type: String, required: true },
    collection: 'usermodel',
});

export const UserModel = connections.model("UserModel", UserSchema);
