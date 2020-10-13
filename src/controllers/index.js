import baseInicial from './base';
import orders from './report/orders';
import insertOrderSale from './bling/insertOrderSale';
import closedNegotiation from './pipeDrive/negotiationWins';

class Routers {
    constructor(app) {
        this.app = app;
    }

    instance() {
        this.app.use('/', baseInicial);
        this.app.use('/orders', orders);
        this.app.use('/bling', insertOrderSale);
        this.app.use('/pipe-drive', closedNegotiation);
        return this.app;
    }
}

export default (app) => new Routers(app).instance();