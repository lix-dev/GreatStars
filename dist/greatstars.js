/*!
 * GreatStars v 0.1
 * https://lixdev.de/
 *
 * Copyright by Lixdev (Felix Gutzmann)
 * Released under the MIT license
 */
(function($) {

    $.fn.greatStars = function(obj) {
       
        this.stars = [];

        this.settings = {
            number: 100,
            speed: 50,
            starClass: "star",
            direction: "up",
            levelClass: "level",
            steps: 2
        };

        this.updateSettings = function(obj) {

            if(Object.keys(obj).length > 0) {
                
                var keys = Object.keys(obj);
                
                for(var i=0; i < keys.length; i++) {
                    this.settings[keys[i]] = obj[keys[i]];
                }
            }

        }, this.updateSettings(obj);     

        this.rndIntRange = function(von, bis) {

            var num, rnd, res;
            
            num = bis - von;
            rnd = Math.floor(Math.random() * num);
            res = rnd + von;
            
            return res;
        }

        this.createLevels = function() {

            for(var i=0; i < 2; i++) {
                
                var lClass = this.settings.levelClass + " " + this.settings.levelClass + "-" + (i+1);

                $(this).append('<div class="'+lClass+'"></div>');

                var elem = $("."+lClass.replace(" ", "."));

                if(i<1) {

                    
                    var level = {
                        "element": elem,
                        "stars": [],
                        "yPos": 0
                    }
                    
                    this.stars.push(level);
                    
                    elem.css({"position":"absolute", "top":level.yPos+"px"});

                } else {   

                    var level = {
                        "element": elem,
                        "stars": [],
                        "yPos": this.height()
                    }
    
                    this.stars.push(level);

                    elem.css({"position":"absolute", "top":level.yPos+"px"});

                }
                
            }

        }, this.createLevels();

        this.moveLevels = function() {

            for(var i=0; i < this.stars.length; i++) {

                var elem = this.stars[i].element;

                if (this.settings.direction == "up") {

                    if(this.stars[i].yPos< (0 - this.height())) {

                        this.stars[i].yPos = (this.height() - 1); 

                    }
                    
                    var newPos = this.stars[i].yPos - this.settings.steps;
                    
                    elem.css({"top": newPos+"px"});
                    
                    this.stars[i].yPos = newPos;
                    
                } else if(this.settings.direction == "down") {

                    
                    if(this.stars[i].yPos> this.height()) {

                        this.stars[i].yPos = ((this.scrollTop() - this.height()) + 1);    
                                            
                    }
                    
                    var newPos = this.stars[i].yPos + this.settings.steps;
                    
                    elem.css({"top": newPos+"px"});
                    
                    this.stars[i].yPos = newPos;
                }
    
            }


            var self = this;
            interval = setTimeout(function() {
                self.moveLevels();
            },this.settings.speed);

        }, this.moveLevels();

        this.createStars = function() {
            
            for(var i=0; i<this.settings.number; i++) {
                
                var iClass = this.settings.starClass+" "+this.settings.starClass+"-"+(i+1);

                for(var z=0; z < 2; z++) {

                    var PosLeft = this.rndIntRange(0, $(this).width());
                    var PosTop = this.rndIntRange(0, $(this).height());
                    
                    var hwrange = this.rndIntRange(1, 5);
                    var width = hwrange + "px";
                    var height = hwrange + "px";
                    var element = "."+iClass.replace(" ", ".");

                    $(this.stars[z].element).append('<i class="'+iClass+'"></i>');
                    
                    this.stars[z].stars.push({
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
                
            }
        }, this.createStars();

        this.stop = function() {
            clearInterval(interval);
            return "Stopped moving stars";
        }

        return this;
    };

})(jQuery);
