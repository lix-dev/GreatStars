# GreatStars v0.1

> Create your own space with GreatStars


## Requirements
* You need to include jQuery to use this Framework


## How to use

```javascript
 $(document).ready(function() {
 
    $(".stars").greatStars({
      number: 100,
      speed: 20,
      direction: "down",
      starClass: "star"
    });
                            
  });
```

### Options
| name | value           | default | description |
|------|-----------------|---------|-------------|
| number | `100` | 100 | Set the number of stars wich will generated (not more than 200 recommended) |
| speed | `100` | 100 | Moving speed of the Stars |
| direction | `down` | up | Change the vertical direction between 'down' and 'up' |
| starClass | `star` | star | Class for the single stars |

