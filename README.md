# GreatStars v0.1

> Create your own space with GreatStars

![](https://lixdev.de/greatstars/greatstars.gif)

## Requirements
* You need to include jQuery to use this Framework


## How to use

1. Download or Clone the sources.
2. Import jQuery library 
3. Insert jQuery snippet to your document
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
4. Insert HTML snippet like this
```html
<div class="stars"></div>
```

Note: You can change the class 'stars' to whatever you want

### Options
| name | value           | default | description |
|------|-----------------|---------|-------------|
| number | `100` | 100 | Set the number of stars wich will generated (not more than 200 recommended) |
| speed | `100` | 100 | Moving speed of the Stars |
| direction | `down` | up | Change the vertical direction between 'down' and 'up' |
| starClass | `star` | star | Class for the single stars |

