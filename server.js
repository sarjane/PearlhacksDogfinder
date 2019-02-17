const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const Router = require('koa-router');
const router = new Router();

app.use(views(__dirname + "/views", {
   extension: 'hbs',
    map: {
       hbs: 'handlebars'
    }
}));

router.get('', async function(ctx) {
    return ctx.render("index", {text: "Welcome to Dog Finder!", body: "This is a website that connects you to a dog nearby"});
});

router.get('/login', async function(ctx) {
    return ctx.render("login", {username: 'barbie', password: 'password'});
});

router.get('/signup', async function(ctx) {
   return ctx.render("signup");
});

router.get('/aboutus', async function(ctx) {
    return ctx.render("aboutus");
});

console.log('server starting...');
app.use(router.routes());
app.listen(3000);