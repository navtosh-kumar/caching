# Implementation of a simple cache system using NodeJS

## With No Cache

### If we look in the browser on the server with end point having no-cache then it will take 3 seconds to load (since we used setTimeout to load the page with no cache in 3 seconds)

##### If you reload this page again it will take 3 seconds again to load the page

## With cache

### The first time we go to the end point with-cache, it takes 3 seconds to load the page. 

#### But, when we refresh the page, it loads instantly. That is because as soon as we loaded the page first time, we cached the results for future requests.