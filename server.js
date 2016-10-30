const express = require( "express" );
const { json } = require( "body-parser" );
const cors = require( 'cors' );
const mongoose = require( "mongoose" );
const app = express();

const port = 5000;
const mongoUri = "mongodb://localhost:27017/castgaming";

app.use( json() );
app.use( cors() );

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

require( "./masterRoutes" )( app );
app.use( express.static( `${ __dirname }/public` ) );
app.listen( port, () => console.log( `Express is listening on ${ port }` ) );
