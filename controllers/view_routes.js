const router = require('express').Router(); // REQUIRE DA ROUTER

router.get('/', (request, response) => { // RENDER INDEX.HTML ON ROOT ROUTE
    response.render('index')
})

module.exports = router;