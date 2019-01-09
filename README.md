# [David Joseph Katz] Master Full-Stack Web Development | Node, SQL, React, &amp; More [ENG, 2018]

<br/>

## Feature 1. Create Dragons: Node.js

    $ docker build -t marley/master-full-stack-web-development -f Dockerfile.dev .
    $ docker run -p 3000:3000 -v /project/node_modules -v $(pwd):/project marley/master-full-stack-web-development

run with container name

    $ docker run --name master-full-stack-web-development -p 3000:3000 -v /app/node_modules -v $(pwd):/app marley/master-full-stack-web-development

<br/>

### Lesson 14. Traits in the Dragon Class

<br/>

### Lesson 17. Generation Class Part 2

<br/>

### Lesson 19. Dragonstack Architecture Check 1

<br/>

## Feature 1. Create Dragons: Express.js

<br/>

### Lesson 21. Set up the Server and Get Dragon

    # npm install --save express

<br/>

![Application](/img/pic-21-01.png?raw=true)

<br/>

### Lesson 23. Codebase Organization Part 2

<br/>

### Lesson 24. Get Generation

http://localhost:3000/generation/
http://localhost:3000/dragon/new/

<br/>

## Feature 1. Create Dragons: PostgreSQL and the Database

<br/>

### Lesson 24. Get Generation

I use free heroku postgres cloud.

And web console:  
http://pgweb-demo.herokuapp.com

    -- user for local database (if needed)
    CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password';

<br/>

    $ chmod +x bin/configure_db.sh

<br/>

### Lesson 32. Configure the Database Pool

    # npm install --save pg

<br/>

### Lesson 34. Generation Table and Storing Generations

<br/>

![Application](/img/pic-34-01.png?raw=true)

<br/>

### Lesson 35. Get Generation with IDs

<br/>

### Lesson 38. Store Dragons

<br/>

### Lesson 39. Error Handling in Express.js

<br/>

### Lesson 41. Trait Table

    # node_modules/.bin/babel-node bin/insertTraits.js

<br/>

![Application](/img/pic-41-01.png?raw=true)

<br/>

### Lesson 42. Trait Table and Get Trait ID

    # node_modules/.bin/babel-node app/trait/table.js
    traitId 7

<br/>

### Lesson 45. Verify Dragon Trait Storage

<br/>

### Lesson 47. Get Dragon With Traits Part 2

    $ npm install --save babel-preset-stage-2

<br/>

    # node_modules/.bin/babel-node app/dragon/helper.js
    dragon Dragon {
    dragonId: 10,
    birthdate: 2019-01-07T07:40:52.736Z,
    nickname: 'unnamned',
    traits:
    [ { traitType: 'backgroundColor', traitValue: 'green' },
        { traitType: 'size', traitValue: 'medium' },
        { traitType: 'pattern', traitValue: 'spotted' },
        { traitType: 'build', traitValue: 'slender' } ],
    generationId: 2236 }

<br/>

## Feature 1. Create Dragons: React.js and Redux

<br/>

### Lesson 50. Set Up the React Frontend Part 1

    $ cd ../frontend/
    $ npx create-react-app .

<br/>

### Lesson 52. Generation Component

    $ npm run start

<br/>

![Application](/img/pic-52-01.png?raw=true)

<br/>

### Lesson 53. React State and Generation Fetch Part 1

<br/>

### Lesson 54. Backend Interlude Cross-Origin Resource Sharing

    $ cd ../backend/
    $ npm install --save cors

<br/>

### Lesson 58. New Dragon in React

<br/>

![Application](/img/pic-58-01.png?raw=true)

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>
