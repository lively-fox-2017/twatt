# TWATT (Twitter API Client)
Simple Twitter API Client to request tweets, recent tweet dan trends.

## Usage
Create .env file and store your token
```
APIKEY={APIKEY}
APISECRET={APISECRET}
ACCESSKEY={ACCESSKEY}
ACCESSSECRET={ACCESSSECRET}
```
then install and run:
```
$ npm install
$ node bin/www
```

## Documentation
METHOD | ROUTE | DESCRIPTION
--- | --- |  ---
GET | /api/search_tweet?q={query} | Get 4 most poplar tweet based on query
GET | /api/timeline?count={count} | Get {count} timeline tweets
GET | /api/trending?id={WOEID} | Get trending topics in {WOEID} area
POST | /api/post_tweet | Post new tweet (Required request body tweet for tweet element)
