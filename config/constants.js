require('dotenv').config()

const mongoUrl = process.env.MONGOURL
const dbname = process.env.DBNAME

export {
    mongoUrl,
    dbname
}
