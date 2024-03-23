
const express = require('express');
const app = express();
const morgan = require('morgan');


app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));

app.use(morgan('dev'))

app.get('/', (req,res) => { 
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum deddu makes fun of it all atall atall '},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum deddu makes fun of it all atall atall '},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum deddu makes fun of it all atall atall '}
    ]
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req,res) => { 
    res.render('about' , {title: 'About'});
});

app.get('/blogs/create', (rq,res) => {
    res.render('create', {title: 'Create a new blog'});
})

app.use((req,res) => { 
    res.status(404).render('404', {title: '404'});
});
