import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesProduct from '../routes/product-routes';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Application listening on port ${this.port}`)
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API work'
            })
        })
        this.app.use('/api/products', routesProduct)
    }

    midlewares(){

        //Parseamos el body
        this.app.use(express.json());

        //Cors
        this.app.use(cors());
    }

    async dbConnect(){

        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}

export default Server;