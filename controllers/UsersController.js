import UsersModel from './models/UsersModel';

class UsersController {
    async create(req, res) {
        console.log('create user')
    }

    async getAll(req, res) {
        console.log('get all user')
    }

    async getOne(req, res) {
        console.log('get one user')
    }

    async update(req, res) {
        console.log('update user')
    }

    async delete(req, res) {
        console.log('delete user')
    }
}

export default UsersController