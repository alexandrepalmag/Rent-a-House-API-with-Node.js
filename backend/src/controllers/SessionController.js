//Existing Methods within a Controller: index, show, update, store, destroy
/*
index ==> sessions list
show ==> List a single session
update ==> Change any session
store ==> Create a new session
destroy ==> Delete a session
*/
import User from '../models/User';

class SessionControler {

    //login to application
    async store(req, res) {

        const { email } = req.body; //get email from requisition

        let user = await User.findOne({ email: email });// to verify if user already exists

        if (!user) {//verification

            user = await User.create({ email: email }) //get email and creation on database

        }

        return res.json(user);

    }

}

export default new SessionControler();
