const { Router } = require("express");
const {Api_A_DB} = require("../controllers/data_a_DB");
const {verificarPaisesEnDB} = require("../controllers/data_a_DB");
const { Countries } = require("../controllers/Countries");
const { countryDetail } = require("../controllers/CountriesById");
const { countryByName } = require("../controllers/CountryByName");
const { createActivity } = require("../controllers/Activities");
const { getActivity } = require("../controllers/getActivity");

const router = Router();


 router.get('/countries', Countries);
 router.get('/countries/name',countryByName);
 router.post('/countries/Activities',createActivity );
router.get('/countries/Activities', getActivity)
 router.get('/countries/:idPais', countryDetail); 
 

module.exports = router;

