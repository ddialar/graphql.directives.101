import * as UserServices from '../../../services/user.services';

const getAllUsers = (parentValues, args, context, astData) => {
    return UserServices.getAllUsers();
};

const Queries = {
    getAllUsers
};

export {
    Queries
};