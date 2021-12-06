# Pounds-Conversion-RestAPI
This is a personal project, where I have explored the fundamentals of a REST API. This was done by researching API & REST API architectural style.

The project is about converting different currencies into pounds.

# Technologies Used:

I have used Postgresql to store, update, delete and show the data. 

I used Node.js + Express framework.

I used POSTMAN throughout the project for regular testing, using PUT, DELETE, GET & POST. 

I used visual code IDE, programming in JavaScript.

# How my API works:

There are 6 aspects to the API:

    - Add currency
    - Delete currency by ID
    - Update amount by ID
    - Update result
    - View all currencies
    - View a specific currency by ID

To add a currency you use the following route: 

    POST localhost:5500/api/conversion_rates/

To DELETE a currency you use the following route (1 is ID at the end of the route): 

    DELETE localhost:5500/api/conversion_rates/1 

To update the amount of a currency you use the following route (1 is ID at the end of the route): 

    PUT localhost:5500/api/conversion_rates/1

To update the result (calculate Rate * Amount) you use the following route:

    GET localhost:5500/api/conversion_rates/result

To show the currency by ID use the following route (1 is ID at the end of the route):

    GET localhost:5500/api/conversion_rates/1

To show all the currencies with the respective result you use the following route:

    GET localhost:5500/api/conversion_rates/
