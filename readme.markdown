# get-twitter-username

> Infer a GitHub user's Twitter username

# install

```shell
npm i get-twitter-username -S
```

# api

```js
const getUsername = require('get-twitter-username');

getUsername('bevacqua').then(user => console.log(user));
```

logs:

```
nzgb
```

# cli

```shell
get-twitter-username bevacqua
```

logs:

```js
nzgb
```

# web

```shell
curl https://get-twitter-username.herokuapp.com/bevacqua
```

response:

```json
nzgb
```

# license

mit
