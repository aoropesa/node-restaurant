import express from 'express';
import setupMiddware from './middleware';
import { restRouter } from './api';
import { connect } from './db';
//import { signin, protect } from './api/modules/auth';

const app = express();

setupMiddware(app);
connect();

//app.use('/signin', signin);
app.use('/', restRouter);
app.use(express.static('client'));

/* app.get('/', (req, res) => {
  res.json({ ok: false });
});

app.all('*', (req, res) => {
  res.json({ ok: true });
}); */

export default app;
