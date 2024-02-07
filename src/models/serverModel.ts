import express, { Application } from 'express';


class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = '3003';
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `Listening on port: ${ this.port }` );
    });
  }
}

export default Server;
