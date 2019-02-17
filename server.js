const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const Router = require('koa-router');
const router = new Router();

app.use(views(__dirname + '/views', {
    extension: 'hbs',
    map: {
      hbs: 'handlebars'
    }
  }));

router.get('/index', async function(ctx) {
    return ctx.render("index", {body: "This is a website that can connect you to a dog nearby."});
});

router.get('/signup', async function(ctx) {
    return ctx.render("signup");
});

console.log('server starting...');
app.use(router.routes());
app.listen(3000);