/*!
 * GreatStars v 0.1
 * https://lixdev.de/greatstars/
 *
 * Copyright by Lixdev Development 
 * Released under the MIT license
 * https://lixdev.de/greatstars/license
 */
(function($) {

    /**
     * The great place
     */
    $.fn.greatStars = function(obj) {
        
        /**
         * define Stars array
         */
        this.stars = [];

  
        /**
         * Default Settings
         */
        this.settings = {
            number: 100, // Number of stars
            speed: 50,
            starsWrapper: this[0],
            starClass: "star",
            direction: "up"
        };


        /**
         * Update Settings from query object
         */
        this.updateSettings = function(obj) {

            if(Object.keys(obj).length > 0) {
                
                var keys = Object.keys(obj);
                
                for(var i=0; i < keys.length; i++) {
                    this.settings[keys[i]] = obj[keys[i]];
                }
            }

        }, this.updateSettings(obj);     


        /**
         * Random int range
         */
        this.rndIntRange = function(von, bis) {

            var num, rnd, res;
            
            num = bis - von;
            rnd = Math.floor(Math.random() * num);
            res = rnd + von;
            
            return res;
        }
        
        /**
         * Create single star and set on random position
         */
        this.createStars = function() {

            /* Create all stars */
            for(var i=0; i<this.settings.number; i++) {

                var iClass = this.settings.starClass+" "+this.settings.starClass+"-"+(i+1);
                var PosLeft = this.rndIntRange(0, $(this).width());
                var PosTop = this.rndIntRange(0, $(this).height());
            
                var hwrange = this.rndIntRange(1, 5);
                var width = hwrange + "px";
                var height = hwrange + "px";
                var element = "."+iClass.replace(" ", ".");
                
                $(this).append('<i class="'+iClass+'"></i>');
                
                this.stars.push({
                    element: iClass,
                    top: PosTop, 
                    left: PosLeft,
                    height: height,
                    width: width
                });
                
                $(element).css({
                    "position": "absolute",
                    "left":PosLeft + "px", 
                    "top": PosTop + "px", 
                    "height": height, 
                    "width": width
                });
                
            }
        }, this.createStars();
        
        
        /**
         * Move stars around
         */
        this.moveStars = function() {
                
            for(var i=0; i < this.stars.length; i++) {
   
                var element = "."+this.stars[i].element.replace(" ", ".");

                if(this.settings.direction == "up") {

                    if(this.stars[i].top < 0) {
                        this.stars[i].top = $(this).height() + 20;
                        this.stars[i].left = rndIntRange(0, this.widht()); 
                    } else {
                        this.stars[i].top = this.stars[i].top - 1;
                    }
                    
                } else if (this.settings.direction == "down") {
                    
                    if(this.stars[i].top > this.height()) {
                        this.stars[i].top = $(this).offset().top - 20;
                        this.stars[i].left = this.rndIntRange(0, this.width()); 
                    } else {
                        this.stars[i].top = this.stars[i].top + 1;
                    }

                }
                
                $(element).css({ "top": this.stars[i].top, "left": this.stars[i].left});

            }

            var self = this;
            setTimeout(function() {
                self.moveStars();
            },this.settings.speed);
                
        }
        this.moveStars();
        

        /**
         * RETURN OBJECT
         */
        return this;

    };


})(jQuery);