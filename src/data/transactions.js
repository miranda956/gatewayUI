
import moment from "moment-timezone";

export default [
    {
        "transactionId": 300500,
        "status": "Paid",
        "service": "B2B",
        "amount": "799,00",
        "date": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY"),
        "account": "regular",
        "merchantId": 23455
    },
    {
        "transactionId": 300499,
        "status": "Paid",
        "service": "B2B",
        "amount": "799,00",
        "date": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY"),
        "account": "regular",
        "merchantId": 23455867
    },
    {
        "transactionId": 300498,
        "status": "Paid",
        "service": "B2B",
        "amount": "799,00",
        "date": moment().subtract(2, "days").add(1, "month").format("DD MMM YYYY"),
        "account": "basic",
        "merchantId": 2345570
    },
    {
        "transactionId": 300497,
        "status": "Paid",
        "service": "STK push",
        "amount": "233,42",
        "date": moment().subtract(3, "days").add(1, "month").format("DD MMM YYYY"),
        "account": "regular",
        "merchantId": 23455246
    },
    {
        "transactionId": 300496,
        "status": "Due",
        "service": "B2C",
        "amount": "533,42",
        "date": moment().subtract(1, "day").format("DD MMM YYYY"),
        "account": "premium",
        "merchantId": 23455868
    },
    {
        "transactionId": 300495,
        "status": "Due",
        "service": "B2C",
        "amount": "533,42",
        "date": moment().subtract(3, "days").format("DD MMM YYYY"),
        "account": "regular",
        "merchantId": 2345574
    },
    {
        "transactionId": 300494,
        "status": "Due",
        "service": "B2B Paybill",
        "amount": "233,42",
        "date": moment().subtract(4, "days").format("DD MMM YYYY"),
        "account": "regular",
        "merchantId": 23455357
    },
    {
        "transactionId": 300493,
        "status": "Canceled",
        "service": "STK push",
        "amount": "533,42",    
        "date": moment().subtract(20, "days").format("DD MMM YYYY"),
        "account": "premium",
        "merchantId": 23455056
    },
    {
        "transactionId": 300492,
        "status": "Canceled",
        "service": "B2B Till",
        "amount": "799,00",       
        "date": moment().subtract(3, "months").format("DD MMM YYYY"),
        "account": "premium",
        "merchantId": 2345534567
    },
    {
        "transactionId": 300491,
        "status": "Paid",
        "service": "B2C",
        "amount": "799,00",
        "date": moment().subtract(6, "days").add(1, "month").format("DD MMM YYYY"),
        "account": "regular",
        "merchantId": 23456455
    }
]