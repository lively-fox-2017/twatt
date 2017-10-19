# twatt
akses api twitter menggunakan oauth (pagi) dan client menggunakan jQuery (siang)

## Route
### list of oauth :

|Route                                                |HTTP       |Description                  |
|-----------------------------------------------------|:---------:|----------------------------:|
|<div style="color:cyan;">/oauths/search/:search</div>|** GET **  |All tweets based on keyword  |
|<div style="color:cyan;">/oauths/recent</div>        |** GET **  |Show my timeline             |
|<div style="color:cyan;">/oauths/tweet</div>         |** POST ** |Post new tweet to my tweeter |
