const express = require('express')
const cors = require('cors')
const app = express()
const port = 4201

app.use(cors())

let shows = [
  {
    id: '1',
    name: 'Breaking Bad',
    imgUrl: 'https://i1.wp.com/metro.co.uk/wp-content/uploads/2018/11/breaking-bad-main-new-9926.jpg',
    description: `Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse.
    His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth,
    and their teenage son is battling cerebral palsy.
    But Walter is dumbstruck when he learns he has terminal cancer.
    Realizing that his illness probably will ruin his family financially,
    Walter makes a desperate bid to earn as much money as he can in the time
    he has left by turning an old RV into a meth lab on wheels.`,
    isFavorite: false
  },
  {
    id: '2',
    name: 'Person of Interest',
    imgUrl: 'https://assets.nydailynews.com/polopoly_fs/1.954520.1318384863!/img/httpImage/image.jpg_gen/derivatives/article_750/alg-person-interest-jpg.jpg',
    description: `Former CIA agent Reese (Jim Caviezel) -- now presumed dead -- and billionaire software genius Finch (Michael Emerson) join forces as a vigilante crime-fighting team. Using Finch's program, which employs pattern recognition to determine individuals who will soon be involved in violent crimes, they combine Reese's covert-operations training and Finch's money and cyberskills to stop crimes before they happen. Former Army Intelligence Support Activity operative Sameen Shaw joins the pair in their quest.`,
    isFavorite: false
  },
  {
    id: '3',
    name: 'Suits',
    imgUrl: 'https://www.usanetwork.com/sites/usanetwork/files/styles/full_episodes_633x356/public/suits_cast_mike.jpg',
    description: `Mike Ross, a talented young college dropout, is hired as an associate by Harvey Specter, one of New York's best lawyers. They must handle cases while keeping Mike's qualifications a secret.`,
    isFavorite: false
  },
  {
    id: '4',
    name: 'Prison Break',
    imgUrl: 'https://d.newsweek.com/en/full/460571/prison-break-miniseries.jpg',
    description: 'An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence.',
    isFavorite: false
  }
];

var data = [
    {
      'title': 'AngularJS',
      'url': 'https://angularjs.org/',
      'description': 'HTML enhanced for web apps!',
      'logo': 'angular.png'
    },
    {
      'title': 'BrowserSync',
      'url': 'http://browsersync.io/',
      'description': 'Time-saving synchronised browser testing.',
      'logo': 'browsersync.png'
    },
    {
      'title': 'GulpJS',
      'url': 'http://gulpjs.com/',
      'description': 'The streaming build system.',
      'logo': 'gulp.png'
    },
    {
      'title': 'Jasmine',
      'url': 'http://jasmine.github.io/',
      'description': 'Behavior-Driven JavaScript.',
      'logo': 'jasmine.png'
    },
    {
      'title': 'Karma',
      'url': 'http://karma-runner.github.io/',
      'description': 'Spectacular Test Runner for JavaScript.',
      'logo': 'karma.png'
    },
    {
      'title': 'Protractor',
      'url': 'https://github.com/angular/protractor',
      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
      'logo': 'protractor.png'
    },
    {
      'title': 'Bootstrap',
      'url': 'http://getbootstrap.com/',
      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
      'logo': 'bootstrap.png'
    },
    {
      'title': 'Angular UI Bootstrap',
      'url': 'http://angular-ui.github.io/bootstrap/',
      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
      'logo': 'ui-bootstrap.png'
    },
    {
      'title': 'Sass (Node)',
      'url': 'https://github.com/sass/node-sass',
      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
      'logo': 'node-sass.png'
    }
  ];
  
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/data', (req, res) => res.json(data))
app.get('/api/shows', (req, res) => res.json(shows))

app.post('/api/shows/:showId/favorite', (req, res) => {
  console.log(req.params);
  const show = shows.find(s => s.id === req.params['showId']);
  show.isFavorite = true;

  return res.json(show);
});

app.post('/api/shows/:showId/unfavorite', (req, res) => {
  const show = shows.find(s => s.id === req.params['showId']);
  show.isFavorite = false;

  return res.json(show);
});

app.delete('/api/shows/:showId', (req, res) => {
  shows = shows.filter(s => s.id !== req.params['showId'])

  return res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))