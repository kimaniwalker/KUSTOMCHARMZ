import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'testuser',
    user: 'testUser',
    database: 'test',
    port:'3306'
});

let users = {} ;

users.all = () => {

    return new Promise((resolve,reject) => {
        pool.query (`SELECT * FROM users`, (err, results) => {

            if(err) {
                return reject(err)
            }

            return resolve(results);
        });

    });
}


users.one = ([id]) => {

    return new Promise((resolve,reject) => {
        pool.query (`SELECT * FROM users WHERE id = ?` , [id], (err, results) => {

            if(err) {
                return reject(err)
            }

            return resolve(results[0]);
        });

    });
}

users.insert = (newUser) => {
    

    return new Promise((resolve,reject) => {
        pool.query (`INSERT INTO users SET ?` , [newUser], (err, results) => {

            if(err) {
                return reject(err)
            } 
            return resolve ({id: results.insertId});
        });

    });
}

users.update = (updateUser, id) => {
    

    return new Promise((resolve,reject) => {
        pool.query (`UPDATE users SET ? WHERE id = ?` , [updateUser,id], (err, results) => {

            if(err) {
                return reject(err)
            } 
            return resolve (results.message);
        });

    });
}

users.findUser = (column, value) => {
    

    return new Promise((resolve,reject) => {
       

        pool.query (`SELECT * FROM users WHERE ?? = ?` , [column, value], (err, results) => {

            if(err) {
                return reject(err)
            } 
            return resolve(results[0]);
        });

    });
}

users.findEmail = (column, value) => {
    

    return new Promise((resolve,reject) => {
       

        pool.query (`SELECT ?? FROM users WHERE ?? = ?` , [column, column, value], (err, results) => {

            if(err) {
                return reject(err)
            } 
            return resolve(results[0]);
        });

    });
}

export default users;