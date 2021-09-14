/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/db/index.js":
/*!********************************!*\
  !*** ./src/server/db/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst pool = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool({\r\n    connectionLimit: 10,\r\n    password: 'testuser',\r\n    user: 'testUser',\r\n    database: 'test',\r\n    port:'3306'\r\n});\r\n\r\nlet testtable = {} ;\r\n\r\ntesttable.all = () => {\r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`SELECT * FROM testtable`, (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            }\r\n\r\n            return resolve(results);\r\n        });\r\n\r\n    });\r\n};\r\n\r\n\r\ntesttable.one = ([id]) => {\r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`SELECT * FROM testtable WHERE id = ?` , [id], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            }\r\n\r\n            return resolve(results[0]);\r\n        });\r\n\r\n    });\r\n};\r\n\r\ntesttable.find = ([column, value]) => {\r\n    \r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`SELECT * FROM testtable WHERE ?? = ?` , [column, value], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            } \r\n            return resolve(results[0]);\r\n        });\r\n\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testtable);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/index.js?");

/***/ }),

/***/ "./src/server/db/users.js":
/*!********************************!*\
  !*** ./src/server/db/users.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n\r\nconst pool = mysql__WEBPACK_IMPORTED_MODULE_0___default().createPool({\r\n    connectionLimit: 10,\r\n    password: process.env.DB_PASSWORD,\r\n    user: process.env.DB_USER,\r\n    database: process.env.DB_SCHEMA,\r\n    port: process.env.DB_PORT\r\n});\r\n\r\nlet users = {} ;\r\n\r\nusers.all = () => {\r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`SELECT * FROM users`, (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            }\r\n\r\n            return resolve(results);\r\n        });\r\n\r\n    });\r\n}\r\n\r\n\r\nusers.one = ([id]) => {\r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`SELECT * FROM users WHERE id = ?` , [id], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            }\r\n\r\n            return resolve(results[0]);\r\n        });\r\n\r\n    });\r\n}\r\n\r\nusers.insert = (newUser) => {\r\n    \r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`INSERT INTO users SET ?` , [newUser], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            } \r\n            return resolve ({id: results.insertId});\r\n        });\r\n\r\n    });\r\n}\r\n\r\nusers.update = (updateUser, id) => {\r\n    \r\n\r\n    return new Promise((resolve,reject) => {\r\n        pool.query (`UPDATE users SET ? WHERE id = ?` , [updateUser,id], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            } \r\n            return resolve (results.message);\r\n        });\r\n\r\n    });\r\n}\r\n\r\nusers.findUser = (column, value) => {\r\n    \r\n\r\n    return new Promise((resolve,reject) => {\r\n       \r\n\r\n        pool.query (`SELECT * FROM users WHERE ?? = ?` , [column, value], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            } \r\n            return resolve(results[0]);\r\n        });\r\n\r\n    });\r\n}\r\n\r\nusers.findEmail = (column, value) => {\r\n    \r\n\r\n    return new Promise((resolve,reject) => {\r\n       \r\n\r\n        pool.query (`SELECT ?? FROM users WHERE ?? = ?` , [column, column, value], (err, results) => {\r\n\r\n            if(err) {\r\n                return reject(err)\r\n            } \r\n            return resolve(results[0]);\r\n        });\r\n\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (users);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/users.js?");

/***/ }),

/***/ "./src/server/middleware/auth.mw.js":
/*!******************************************!*\
  !*** ./src/server/middleware/auth.mw.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenCheck\": () => (/* binding */ tokenCheck)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nfunction tokenCheck(req, res, next) {\r\n    passport__WEBPACK_IMPORTED_MODULE_0___default().authenticate('jwt', (err, user, info) => {\r\n\r\n\r\n\r\n\r\n        if (err) {\r\n            return next(err);\r\n        }\r\n\r\n        if (info) {\r\n            return res.status(401).send({ message: info.message })\r\n        }\r\n\r\n\r\n        if (!user) {\r\n            return res.status(401).json({ message: 'I cant find a user fool' })\r\n        }\r\n\r\n\r\n        req.user = user\r\n        next();\r\n    })(req, res, next)\r\n\r\n}\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/middleware/auth.mw.js?");

/***/ }),

/***/ "./src/server/middleware/passport.js":
/*!*******************************************!*\
  !*** ./src/server/middleware/passport.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configurePassport\": () => (/* binding */ configurePassport)\n/* harmony export */ });\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var passport_google_oauth2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-google-oauth2 */ \"passport-google-oauth2\");\n/* harmony import */ var passport_google_oauth2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/security */ \"./src/server/utils/security.js\");\n/* harmony import */ var _db_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db/users */ \"./src/server/db/users.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n\r\n\r\n\r\nfunction configurePassport(app) {\r\n    passport__WEBPACK_IMPORTED_MODULE_0___default().serializeUser((user, done) => {\r\n        if (user.password) {\r\n            delete user.password;\r\n        }\r\n        done(null, user)\r\n    });\r\n    passport__WEBPACK_IMPORTED_MODULE_0___default().deserializeUser((user, done) => done(null, user));\r\n\r\n\r\n    passport__WEBPACK_IMPORTED_MODULE_0___default().use(new (passport_local__WEBPACK_IMPORTED_MODULE_2___default().Strategy)({\r\n        usernameField: 'email'\r\n    }, async (email, password, done) => {\r\n\r\n\r\n        try {\r\n            const userFound = await _db_users__WEBPACK_IMPORTED_MODULE_5__.default.findUser('email', email)\r\n\r\n            if (userFound && (0,_utils_security__WEBPACK_IMPORTED_MODULE_4__.checkPassword)(password, userFound.hash)) {\r\n\r\n                done(null, userFound)\r\n            } else {\r\n                done(null, false);\r\n            }\r\n\r\n        } catch (error) {\r\n            done(error)\r\n        }\r\n    }));\r\n\r\n    passport__WEBPACK_IMPORTED_MODULE_0___default().use(new (passport_jwt__WEBPACK_IMPORTED_MODULE_1___default().Strategy)({\r\n        jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1___default().ExtractJwt.fromAuthHeaderAsBearerToken(),\r\n        secretOrKey: process.env.JWT_SECRET\r\n    }, async (payload, done) => {\r\n        try {\r\n            done(null, payload)\r\n        } catch (error) {\r\n            done\r\n        }\r\n    }));\r\n\r\n    passport__WEBPACK_IMPORTED_MODULE_0___default().use(\r\n        new (passport_google_oauth2__WEBPACK_IMPORTED_MODULE_3___default())(\r\n            {\r\n                clientID: process.env.CLIENTID,\r\n                clientSecret: process.env.CLIENTSECRET,\r\n                callbackURL: 'http://localhost:3000/api/auth/login/google/redirect'\r\n            },\r\n            async function (accessToken, refreshToken, profile, done) {\r\n                let userProfile = profile\r\n                if (userProfile) {\r\n                    try {\r\n\r\n                        console.log(userProfile)\r\n                        return done(null , userProfile)\r\n\r\n                    } catch (err) {\r\n                        console.log(err);\r\n                        return done(null, false, { message: \"Invalid login\" });\r\n                    }\r\n                }\r\n            }\r\n        )\r\n    );\r\n\r\n    app.use(passport__WEBPACK_IMPORTED_MODULE_0___default().initialize());\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/middleware/passport.js?");

/***/ }),

/***/ "./src/server/routes/api/auth.js":
/*!***************************************!*\
  !*** ./src/server/routes/api/auth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/users */ \"./src/server/db/users.js\");\n/* harmony import */ var _utils_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/security */ \"./src/server/utils/security.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get('/', async (req, res) => {\r\n\r\n    try {\r\n        let results = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.all()\r\n        res.json(results);\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\nrouter.get('/generate/:pw', (req, res, next) => {\r\n    generateHash(req.params.pw)\r\n        .then((hash) => {\r\n            res.send(hash);\r\n        }).catch((err) => {\r\n            next(err);\r\n        })\r\n});\r\n\r\nrouter.get('/compare/:pw', (req, res, next) => {\r\n    (0,_utils_security__WEBPACK_IMPORTED_MODULE_2__.checkPassword)(req.params.pw, '$2b$12$pmNURpkI4N66.UVwj5HOQ.vgH0pIx2jC9NrRYTjtDmHOuvdXdiHFO')\r\n        .then((hash) => {\r\n            res.send(hash);\r\n        }).catch((err) => {\r\n            next(err);\r\n        })\r\n});\r\n\r\n\r\nrouter.post(\"/login\", passport__WEBPACK_IMPORTED_MODULE_4___default().authenticate('local'), async (req, res) => {\r\n\r\n    try {\r\n\r\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({ \"id\": req.user.id, \"role\": req.user.role, \"email\": req.user.email }, process.env.JWT_SECRET, { expiresIn: '15d' });\r\n      \r\n\r\n        res.status(200).json(token)\r\n\r\n\r\n\r\n\r\n    } catch (err) {\r\n        console.log('Error' + err);\r\n       res.status(500).send(err);\r\n\r\n    }\r\n});\r\nrouter.get(\"/login/google\", passport__WEBPACK_IMPORTED_MODULE_4___default().authenticate('google', {\r\n    scope:\r\n        ['email', 'profile']\r\n}), async (req, res) => {\r\n});\r\nrouter.get(\"/login/google/redirect\", passport__WEBPACK_IMPORTED_MODULE_4___default().authenticate('google', {\r\n    \r\n        successRedirect: \"/\",\r\n        failureRedirect: \"/api/auth/login\"\r\n      \r\n}), async (req, res) => {\r\n\r\n    try {\r\n        /* \r\n              const token = jwt.sign({ \"id\": req.user.id, \"role\": req.user.role, \"email\": req.user.email }, process.env.JWT_SECRET , { expiresIn: '15d' });\r\n              \r\n              console.log(token); */\r\n        return res.json({ message: 'testing' })\r\n\r\n\r\n\r\n\r\n    } catch (err) {\r\n        console.log('Error' + err);\r\n        res.send(err)\r\n    }\r\n});\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/api/auth.js?");

/***/ }),

/***/ "./src/server/routes/api/checkout.js":
/*!*******************************************!*\
  !*** ./src/server/routes/api/checkout.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mail */ \"./src/server/utils/mail.js\");\n\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config()\r\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPESKLIVE);\r\nconst YOUR_DOMAIN = \"https://www.kustomcharmz.com\";\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\n\r\nrouter.post('/create-checkout-session', async (req, res) => {\r\n\r\n\r\n  try {\r\n    const session = await stripe.checkout.sessions.create({\r\n      payment_method_types: ['card'],\r\n      allow_promotion_codes: true,\r\n      line_items:\r\n        req.body.items\r\n      ,\r\n      metadata: {\r\n        'custom_message': req.body.message,\r\n        'shipping_total': req.body.shipping,\r\n      },\r\n      mode: 'payment',\r\n      shipping_rates: [req.body.shipping_rate],\r\n      shipping_address_collection: {\r\n        allowed_countries: ['US', 'CA']\r\n      },\r\n      success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,\r\n      cancel_url: `${YOUR_DOMAIN}/cart`,\r\n    },\r\n      {\r\n        stripeAccount: 'acct_1JSByuLJedda0w0c',\r\n      }\r\n    );\r\n    console.log(session)\r\n    res.json(session.url)\r\n  } catch (error) {\r\n    console.log(error)\r\n  }\r\n\r\n});\r\n\r\nrouter.post('/retrieve-checkout-session', async (req, res) => {\r\n\r\n  try {\r\n    const session = await stripe.checkout.sessions.retrieve(\r\n      req.body.session_id\r\n    )\r\n    console.log(session)\r\n    res.json(session)\r\n  } catch (error) {\r\n    console.log(error)\r\n  }\r\n\r\n\r\n\r\n});\r\n\r\n\r\n\r\nrouter.post('/webhook', async (req, res) => {\r\n\r\n\r\n  const event = req.body;\r\n\r\n  // Handle the event\r\n  switch (event.type) {\r\n    case 'checkout.session.completed':\r\n      const checkoutSession = event.data.object;\r\n      console.log('Checkout Session Completed')\r\n\r\n      const customerDetails = {\r\n        \"email\": checkoutSession.customer_details.email,\r\n        \"total\": checkoutSession.amount_total\r\n      }\r\n\r\n\r\n\r\n      console.log(customerDetails)\r\n      // Then define and call a method to handle the successful attachment of a PaymentMethod.\r\n      // handlePaymentMethodAttached(paymentMethod);\r\n      break;\r\n    case 'payment_intent.succeeded':\r\n      const paymentIntent = event.data.object;\r\n      console.log('Payment Intent Succeeded')\r\n      const shipping = {\r\n        \"name\": paymentIntent.shipping.name,\r\n        \"city\": paymentIntent.shipping.address.city,\r\n        \"state\": paymentIntent.shipping.address.state,\r\n        \"postal_code\": paymentIntent.shipping.address.state,\r\n        \"address\": paymentIntent.shipping.address.line1,\r\n        \"country\": paymentIntent.shipping.address.country,\r\n      }\r\n\r\n\r\n      // Then define and call a method to handle the successful payment intent.\r\n      // handlePaymentIntentSucceeded(paymentIntent);\r\n      break;\r\n    case 'payment_intent.created':\r\n      const paymentIntentCreated = event.data.object;\r\n      console.log('Payment Intent Created')\r\n\r\n      // Then define and call a method to handle the successful payment intent.\r\n      // handlePaymentIntentSucceeded(paymentIntent);\r\n      break;\r\n    case 'charge.succeeded':\r\n      const chargeSucceeded = event.data.object;\r\n      console.log('Charge Completed')\r\n\r\n      const receipt = {\r\n        \"receipt\": chargeSucceeded.receipt_url,\r\n        \"amount\": '$' + chargeSucceeded.amount / 100 + '.00'\r\n      }\r\n      const shippingInfo = {\r\n        \"name\": chargeSucceeded.shipping.name,\r\n        \"email\": chargeSucceeded.billing_details.email,\r\n        \"city\": chargeSucceeded.shipping.address.city,\r\n        \"state\": chargeSucceeded.shipping.address.state,\r\n        \"postal_code\": chargeSucceeded.shipping.address.postal_code,\r\n        \"address\": chargeSucceeded.shipping.address.line1,\r\n        \"country\": chargeSucceeded.shipping.address.country,\r\n      }\r\n\r\n      const orderDetails = {\r\n        receipt,\r\n        shippingInfo\r\n      }\r\n\r\n      console.log(orderDetails)\r\n\r\n      ;(0,_utils_mail__WEBPACK_IMPORTED_MODULE_1__.newOrder)(orderDetails)\r\n        .then((response) => {\r\n          console.log(response);\r\n        }).catch((err) => {\r\n          console.log(err)\r\n        });\r\n\r\n\r\n\r\n      // Then define and call a method to handle the successful attachment of a PaymentMethod.\r\n      // handlePaymentMethodAttached(paymentMethod);\r\n      break;\r\n    case 'customer.created':\r\n      const customerCreated = event.data.object;\r\n      console.log('Customer Completed')\r\n\r\n\r\n      // Then define and call a method to handle the successful attachment of a PaymentMethod.\r\n      // handlePaymentMethodAttached(paymentMethod);\r\n      break;\r\n    // ... handle other event types\r\n    default:\r\n      console.log(`Unhandled event type ${event.type}`);\r\n  }\r\n\r\n  // Return a response to acknowledge receipt of the event\r\n  res.json({ received: true });\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/api/checkout.js?");

/***/ }),

/***/ "./src/server/routes/api/contact.js":
/*!******************************************!*\
  !*** ./src/server/routes/api/contact.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mail */ \"./src/server/utils/mail.js\");\n\r\n\r\n\r\n\r\nlet router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\r\n\r\n\r\nrouter.post('/', (req, res) => {\r\n\r\n  (0,_utils_mail__WEBPACK_IMPORTED_MODULE_1__.sendEmail)('admin@kustomcharmz.com', req.body.email, req.body.subject , req.body.content, req.body.name) \r\n    .then((response) => {\r\n      console.log(response);\r\n      res.send(response);\r\n    }).catch((err) => {\r\n      console.log(err)\r\n    });\r\n})\r\n\r\nrouter.put('/subscribe', (req, res) => {\r\n\r\n  ;(0,_utils_mail__WEBPACK_IMPORTED_MODULE_1__.addContact)(req.body.firstname, req.body.lastname, req.body.email)\r\n    .then((response) => {\r\n      console.log(response);\r\n      res.send(response);\r\n    }).catch((err) => {\r\n      console.log(err)\r\n    });\r\n})\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/api/contact.js?");

/***/ }),

/***/ "./src/server/routes/api/index.js":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/todos */ \"./src/server/routes/api/todos.js\");\n/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/users */ \"./src/server/routes/api/users.js\");\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth */ \"./src/server/routes/api/auth.js\");\n/* harmony import */ var _api_checkout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/checkout */ \"./src/server/routes/api/checkout.js\");\n/* harmony import */ var _api_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/contact */ \"./src/server/routes/api/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.use('/todos', _api_todos__WEBPACK_IMPORTED_MODULE_1__.default);\r\nrouter.use('/users' , _api_users__WEBPACK_IMPORTED_MODULE_2__.default);\r\nrouter.use('/auth' , _api_auth__WEBPACK_IMPORTED_MODULE_3__.default);\r\nrouter.use('/checkout', _api_checkout__WEBPACK_IMPORTED_MODULE_4__.default);\r\nrouter.use('/contact', _api_contact__WEBPACK_IMPORTED_MODULE_5__.default);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/api/index.js?");

/***/ }),

/***/ "./src/server/routes/api/todos.js":
/*!****************************************!*\
  !*** ./src/server/routes/api/todos.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../db */ \"./src/server/db/index.js\");\n/* harmony import */ var _middleware_auth_mw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../middleware/auth.mw */ \"./src/server/middleware/auth.mw.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get('/', /* passport.authenticate('jwt') */ _middleware_auth_mw__WEBPACK_IMPORTED_MODULE_4__.tokenCheck,  async (req, res) => {\r\n    /* const bearerToken = req.headers.authorization;\r\n\r\n    if (bearerToken) {\r\n        const token = bearerToken.split(' ')[1];\r\n\r\n        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {\r\n            if (err) {\r\n                return res.sendStatus(403);\r\n            }\r\n\r\n            res.json({user})\r\n        });\r\n    } else {\r\n        res.sendStatus(401);\r\n    } */\r\n\r\n    res.json({message: req.user})\r\n\r\n});\r\n\r\nrouter.get('/:todoid', async (req, res) => {\r\n    let todoid = req.params.todoid\r\n    try {\r\n        res.json({ msg: 'You write some good code brotha !!' + todoid });\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\nrouter.put('/:todoid', async (req, res, next) => {\r\n    let todoid = req.params.todoid\r\n    let id = req.params.id\r\n    try {\r\n        res.json({ msg: 'You write some good code brotha !!' + todoid + id });\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\nrouter.post('/', async (req, res, next) => {\r\n    let newTodo = req.body;\r\n    try {\r\n        res.json({ msg: 'You write some good code brotha !!', ...newTodo });\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\nrouter.delete('/:id', async (req, res, next) => {\r\n    let id = req.params.id;\r\n    try {\r\n        res.json({ msg: 'You write some good code brotha !!', id });\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/api/todos.js?");

/***/ }),

/***/ "./src/server/routes/api/users.js":
/*!****************************************!*\
  !*** ./src/server/routes/api/users.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _db_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../db/users */ \"./src/server/db/users.js\");\n/* harmony import */ var _utils_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/security */ \"./src/server/utils/security.js\");\n/* harmony import */ var _middleware_auth_mw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../middleware/auth.mw */ \"./src/server/middleware/auth.mw.js\");\n\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get('/', async (req, res) => {\r\n\r\n    try {\r\n        let results = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.all()\r\n        res.json(results);\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\nrouter.get('/me', /* passport.authenticate('jwt') */ _middleware_auth_mw__WEBPACK_IMPORTED_MODULE_3__.tokenCheck,  async (req, res) => {\r\n    /* const bearerToken = req.headers.authorization;\r\n\r\n    if (bearerToken) {\r\n        const token = bearerToken.split(' ')[1];\r\n\r\n        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {\r\n            if (err) {\r\n                return res.sendStatus(403);\r\n            }\r\n\r\n            res.json({user})\r\n        });\r\n    } else {\r\n        res.sendStatus(401);\r\n    } */\r\n\r\n    res.json({message: req.user})\r\n\r\n});\r\n\r\n\r\nrouter.get('/:id', async (req, res) => {\r\n    let userid = req.params.id\r\n    try {\r\n        res.json({ msg: 'You write some good code brotha !!' + userid });\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some good code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\n\r\n\r\nrouter.get('/generate/:pw', (req, res, next) => {\r\n    (0,_utils_security__WEBPACK_IMPORTED_MODULE_2__.generateHash)(req.params.pw)\r\n        .then((hash) => {\r\n            res.send(hash);\r\n        }).catch((err) => {\r\n            next(err);\r\n        })\r\n});\r\n\r\nrouter.get('/compare/:pw', async (req, res, next) => {\r\n    const token = await (0,_utils_security__WEBPACK_IMPORTED_MODULE_2__.checkPassword)(req.params.pw, '$2b$12$kQnCRgkr8pR7wP0dUv9vpucahOosc6/JVR9ellXrEuNOCalxM9eR2');\r\n    return res.send(token);\r\n});\r\n\r\nrouter.put(\"/\", async (req, res) => {\r\n\r\n\r\n    try {\r\n\r\n        let insertObject = req.body;\r\n        \r\n        console.log(insertObject);\r\n        let idObj = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.update(insertObject, insertObject.id);\r\n        res.status(201).json(idObj);\r\n\r\n    } catch (err) {\r\n    console.log('Error' + err);\r\n       res.send(err)\r\n\r\n    }\r\n});\r\n\r\nrouter.put(\"/forgot-password\", async (req, res) => {\r\n\r\n\r\n    try {\r\n        let hash = await (0,_utils_security__WEBPACK_IMPORTED_MODULE_2__.generateHash)(req.body.password);\r\n        let insertObject = {\r\n            hash,\r\n            id: req.body.id\r\n        };\r\n        \r\n        console.log(insertObject);\r\n        let idObj = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.update(insertObject, insertObject.id);\r\n        res.status(201).json(idObj);\r\n\r\n    } catch (err) {\r\n    console.log('Error' + err);\r\n       res.send(err)\r\n\r\n    }\r\n});\r\n\r\nrouter.post(\"/\", async (req, res) => {\r\n\r\n\r\n    try {\r\n\r\n        let hash = await (0,_utils_security__WEBPACK_IMPORTED_MODULE_2__.generateHash)(req.body.password);\r\n        let insertObject = {\r\n            email: req.body.email,\r\n            hash,\r\n            first_name: req.body.first_name,\r\n            last_name: req.body.last_name,\r\n            state: req.body.state,\r\n            zip: req.body.zipcode,\r\n            address: req.body.address,\r\n            phone: req.body.phone,\r\n            role: req.body.role,\r\n            profile_picture: req.body.profile_picture\r\n\r\n        };\r\n        console.log(insertObject);\r\n        let idObj = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.insert(insertObject);\r\n        res.status(201).json(idObj);\r\n\r\n    } catch (err) {\r\n        console.log('Error' + err);\r\n        if (err.errno === 1062) {\r\n            res.status(500).send(\"Emails have to be unique!\");\r\n        } else res.status(500).send(err);\r\n\r\n    }\r\n});\r\n\r\nrouter.post(\"/getUser\", async (req, res) => {\r\n\r\n\r\n    try {\r\n\r\n        let column = req.body.column;\r\n        let value = req.body.value;\r\n\r\n\r\n        let idObj = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.findUser(column, value);\r\n        res.status(200).json(idObj);\r\n\r\n    } catch (err) {\r\n        console.log(err)\r\n        res.status(500).send(err);\r\n    }\r\n});\r\n\r\nrouter.delete('/:id', async (req, res) => {\r\n    let id = req.params.id;\r\n    try {\r\n        let results = await _db_users__WEBPACK_IMPORTED_MODULE_1__.default.delete(id);\r\n        res.json(results);\r\n    } catch (error) {\r\n        res.sendStatus(500).json({ msg: 'You write some bad code brotha !!', error: error.message });\r\n    }\r\n\r\n});\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/api/users.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.js\");\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__.default)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _middleware_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/passport */ \"./src/server/middleware/passport.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\ndotenv__WEBPACK_IMPORTED_MODULE_4___default().config();\r\n\r\n(0,_middleware_passport__WEBPACK_IMPORTED_MODULE_6__.configurePassport)(app);\r\n/* app.use(passport.initialize()); \r\n */\r\n\r\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static('public'));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\r\n\r\n\r\napp.use(_routes__WEBPACK_IMPORTED_MODULE_1__.default);\r\napp.use('*', (req, res) => {\r\n    res.sendFile(path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname , '../public/index.html'));\r\n})\r\n\r\nconst port = process.env.PORT || 3000;\r\napp.listen(port, () => console.log(`Server listening on port: ${port}`));\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.js?");

/***/ }),

/***/ "./src/server/utils/mail.js":
/*!**********************************!*\
  !*** ./src/server/utils/mail.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendEmail\": () => (/* binding */ sendEmail),\n/* harmony export */   \"addContact\": () => (/* binding */ addContact),\n/* harmony export */   \"newOrder\": () => (/* binding */ newOrder)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n__webpack_require__(/*! dotenv */ \"dotenv\").config()\r\nconst sgMail = __webpack_require__(/*! @sendgrid/mail */ \"@sendgrid/mail\");\r\n\r\n\r\nfunction sendEmail(to, from, subject, content, name) {\r\n\r\n    sgMail.setApiKey(process.env.SENDGRID);\r\n    let msg = {\r\n        to,\r\n        \"from\":\"no-reply-admin@kustomcharmz.com\",\r\n        subject,\r\n        html: `<h2>Hello Kustom Charmz</h2>\r\n        <p><strong>${subject}</strong></p>\r\n        <p><strong>${name}</strong> Sent you a message from <strong>${from}</strong></p>\r\n        <p>${content}</p>`\r\n    };\r\n    console.log(msg);\r\n\r\n    return sgMail.send(msg);\r\n\r\n\r\n}\r\n\r\nfunction newOrder(orderDetails) {\r\n\r\n    sgMail.setApiKey(process.env.SENDGRID);\r\n    let msg = {\r\n        \"to\": 'admin@kustomcharmz.com',\r\n        \"from\": 'no-reply-admin@kustomcharmz.com',\r\n        \"subject\": 'You Have A New Order',\r\n        \"html\": `<h1>Hello Kustom Charmz</h1>\r\n        <p><strong>${orderDetails.shippingInfo.name}</strong> just bought something</p>\r\n        <p>You Just Got Paid <strong> ${orderDetails.receipt.amount}</strong> Shawtyyyy. Now you gotta get yo ass to work lol. Rememeber this what comes with being a boss. I'll give you all the info you need to get started. You can see it below. OH and you can get it tonight ;) Love You ! </p>\r\n        <h5>Below is the shipping information</h5>\r\n        <p>Name: ${orderDetails.shippingInfo.name} </p>\r\n        <p>Email: ${orderDetails.shippingInfo.email} </p>\r\n        <p>State: ${orderDetails.shippingInfo.state} </p>\r\n        <p>City: ${orderDetails.shippingInfo.city} </p>\r\n        <p>Zip Code: ${orderDetails.shippingInfo.postal_code} </p>\r\n        <p>Address: ${orderDetails.shippingInfo.address} </p>\r\n        <p>County: ${orderDetails.shippingInfo.country} </p>\r\n        \r\n        <p><strong><a href=${orderDetails.receipt.receipt} target=\"_blank\">Open Receipt</a></strong></p>`\r\n\r\n    };\r\n\r\n    \r\n    console.log(msg);\r\n\r\n    return sgMail.send(msg);\r\n\r\n\r\n}\r\n\r\nasync function addContact(firstname, lastname, email) {\r\n\r\n    const contactBody = {\r\n        \"list_ids\": [\r\n            \"f18e4adb-5974-4aa3-afda-b0aff6286057\"\r\n        ],\r\n        \"contacts\": [\r\n            {\r\n                \r\n                \"email\": email,\r\n                \"first_name\": firstname,\r\n                \"last_name\": lastname\r\n            }\r\n        ]\r\n    }\r\n\r\n\r\n    try {\r\n        let res = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {\r\n            method: 'PUT',\r\n            body: JSON.stringify(contactBody),\r\n            headers: new Headers({\r\n                \"Content-Type\": \"application/json\",\r\n                'Authorization': `Bearer ${process.env.SENDGRID}`\r\n            })\r\n\r\n        });\r\n        let sessionResponse = await res.json();\r\n        console.log(sessionResponse);\r\n\r\n        return sessionResponse;\r\n\r\n    } catch (e) {\r\n        console.log(e)\r\n        return e\r\n    }\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/utils/mail.js?");

/***/ }),

/***/ "./src/server/utils/security.js":
/*!**************************************!*\
  !*** ./src/server/utils/security.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateHash\": () => (/* binding */ generateHash),\n/* harmony export */   \"checkPassword\": () => (/* binding */ checkPassword)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst SALT_ROUNDS = 12;\r\n\r\nfunction generateHash(password) {\r\n\r\n\r\nconst salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync(SALT_ROUNDS);\r\nconst hash = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, salt);\r\n\r\nreturn hash\r\n}\r\n\r\nfunction checkPassword(password, hash) {\r\n    return bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compareSync(password, hash);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/utils/security.js?");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-google-oauth2":
/*!*****************************************!*\
  !*** external "passport-google-oauth2" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth2");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;