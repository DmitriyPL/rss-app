import { UserDto } from "../dtos/user-dto.js";
import { userService } from "../service/user-service.js";

class UserController {

    async initUser(req, res, next){
        try {

            const user = await userService.getUser();

            let userDto;
            if (user) {                   
                userDto = new UserDto(user);
                    
            } else {
                const rootUser = await userService.createUser('root');
                userDto = new UserDto(rootUser);
            }

            return res.json(userDto);

        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();