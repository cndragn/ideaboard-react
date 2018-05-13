# Ideaboard Front End

Front End - ideaboard-react repo: https://github.com/cndragn/ideaboard-react

Back End - ideaboard-api repo: https://github.com/cndragn/ideaboard-api

View live project: http://ideaboard-react.surge.sh/

API on Heroku: https://idea-api.herokuapp.com/api/v1/ideas

## Run locally
* Clone ideaboard-react repo and cd into it
    * terminal: `yarn`
    * terminal: `yarn start`
* Clone ideaboard-api repo and cd into it
    * terminal: `rails db:migrate db:seed`
    * terminal: `rails s -p 3001`

## Deploy to Surge
* Update api from localhost:3001 to link on heroku
* terminal: `npm run build'
* terminal: `surge'
* Log in or create account at prompt
* Add `build` at end of project path
* Change project url if desired, ending with surge.sh

## Update project on Surge
* terminal: `npm run build'
* terminal: `surge'
* Log in at prompt
* Add `build` at end of project path
* Change project url to project being updated
