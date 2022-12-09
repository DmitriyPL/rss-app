import { UserModel } from "../models/user-model.js";
import { ApiError } from "../exceptions/api-error.js";


class UserService {

    async getUser() {
        const users = await UserModel.find();
        if (users.length) {
            return users[0];
        } else return null;
    }

    async createUser (nickname) {        

        const candidate = await UserModel.findOne({ nickname });

        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с ником ${email} уже существует!`);
        }
        
        const user = await UserModel.create({ nickname })
       
        return { user };
    }

    async removeRssLink(linkID){

        const user = await userService.getUser();

        const index = user.rssList.indexOf(linkID);
        if (index > -1) { 
            user.rssList.splice(index, 1); 
        }

        user.save();
    }

}

export const userService = new UserService();