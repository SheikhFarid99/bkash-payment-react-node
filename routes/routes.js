const router = require('express').Router()
const paymentController = require('../controller/paymentController')
const middleware = require('../middleware/middleware')

router.post('/bkash/payment/create',middleware.bkash_auth, paymentController.payment_create)

router.get('/bkash/payment/callback',middleware.bkash_auth, paymentController.call_back)

router.get('/bkash/payment/callback',middleware.bkash_auth, paymentController.call_back)

router.get('/bkash/payment/refund/:trxID',middleware.bkash_auth, paymentController.refund)



module.exports = router