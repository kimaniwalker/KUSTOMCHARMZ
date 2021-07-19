import mysql from 'mysql';

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'testuser',
    user: 'testUser',
    database: 'test',
    port:'3306'
});

let testtable = {} ;

testtable.all = () => {

    return new Promise((resolve,reject) => {
        pool.query (`SELECT * FROM testtable`, (err, results) => {

            if(err) {
                return reject(err)
            }

            return resolve(results);
        });

    });
};


testtable.one = ([id]) => {

    return new Promise((resolve,reject) => {
        pool.query (`SELECT * FROM testtable WHERE id = ?` , [id], (err, results) => {

            if(err) {
                return reject(err)
            }

            return resolve(results[0]);
        });

    });
};

testtable.find = ([column, value]) => {
    

    return new Promise((resolve,reject) => {
        pool.query (`SELECT * FROM testtable WHERE ?? = ?` , [column, value], (err, results) => {

            if(err) {
                return reject(err)
            } 
            return resolve(results[0]);
        });

    });
};

export default testtable;