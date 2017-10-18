# twatt
akses api twitter menggunakan oauth (pagi) dan client menggunakan jQuery (siang)

## Routes
| Route                                  | HTTP      | Description                                     |
| :------------------------------------- | :-------- | :---------------------------------------------- |
| /api/twitter/search?q=`:keyword`       | GET       | Search for tweets                               |
| /api/twitter/timeline                  | GET       | See tweets on your timeline                     |
| /api/twitter/                          | POST      | Update a status (tweeting), pass a `status` key |
