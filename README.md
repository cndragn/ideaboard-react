# Ideaboard

Demo: http://ideaboard-react.surge.sh/

API: https://idea-api.herokuapp.com/api/v1/ideas

Back End repo: https://github.com/cndragn/ideaboard-api

## Description

A place to create a collection of your ideas in one place.

Click the "New Idea" button to create a new card, then enter a title and description of your idea.  To edit an idea, click directly on the title or description of the idea you would like to modify and type in the new information.  To delete an idea, hover over or click on a card and click on the red "X"

![Preview version 2](https://raw.githubusercontent.com/cndragn/ideaboard-react/master/img/version2.png) 

## Technologies Used

Ruby on Rails, React, API, Bootstrap, Sass.

Back end API deployed to Heroku, React front end deployed to Surge.sh

## Future Plans

* Ability to include and edit photos.
* User login to create and save personal idea boards.
* Create collections of idea boards.
* Share idea board link with others.
* Ability to make boards public or private.
* Browse through public idea boards.
* Save an idea from a public idea board to personal idea board.

## Run locally

* Clone ideaboard-react repo and cd into it
    * terminal: `yarn`
    * terminal: `yarn start`
    * Update api links in `IdeaForm.js` and `IdeasContainer.js` from `idea-api.herokuapp.com/api/vi/ideas` to `localhost:3001`
* Clone ideaboard-api repo and cd into it
    * terminal: `rails db:migrate db:seed`
    * terminal: `rails s -p 3001`

## Sass processor for reactstrap

* terminal: `gem install sass`
* In `package.json`'s scripts, add this line: `"sass" : "sass --watch src/styles/scss:src/styles/css"`
* Create your custom bootstrap theme file `src/styles/scss/custom.scss`
* Open a new tab in terminal: `yarn run sass`
* In src/index.js replace `import 'bootstrap/dist/css/bootstrap.css';` with `import './styles/css/custom.css';`
* At bottom of custom.scss file add `@import "../../../node_modules/bootstrap/scss/bootstrap";`

## Deploy to Surge

* Update api in IdeaForm.js and IdeasContainer.js from localhost:3001
* terminal: `npm run build`
* terminal: `surge`
* Log in or create account at prompt
* Add `build` at end of project path
* Change project url if desired, ending with surge.sh

## Update project on Surge

* terminal: `npm run build`
* terminal: `surge`
* Log in at prompt
* Add `build` at end of project path
* Change project url to project being updated

### Attributions
Tutorial: [Learnetto: React JS tutorial make an idea board app](https://learnetto.com/tutorials/rails-5-api-and-react-js-tutorial-how-to-make-an-idea-board-app)

## Previous versions
![Preview version 1](https://raw.githubusercontent.com/cndragn/ideaboard-react/master/img/v1.png) *Version 1*

