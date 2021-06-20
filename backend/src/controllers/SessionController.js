//Existing Methods within a Controller: index, show, update, store, destroy
/*
index ==> sessions list
show ==> List a single session
update ==> Change any session
store ==> Create a new session
destroy ==> Delete a session
*/

class SessionControler {

    store(req, res) {

        return res.json({ message: "my api" });

    }

}

export default new SessionControler();
