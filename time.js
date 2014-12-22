$(function(){
  function Time(timeEl, colorEl){
    this._currentTime = new Date();
    this._$timeEl = $(timeEl);
    this._$colorEl = $(colorEl);
    this.setInitial();
    this.start();
  }


  Time.prototype.setNewTime = function(){
    this._currentTime = new Date();
  }

  Time.prototype.updateElTime = function(){
    var $seconds = this._$timeEl.find(".second");
    var $minutes = this._$timeEl.find(".minute");
    var $hours = this._$timeEl.find(".hour");

    var seconds = this.padTime(this._currentTime.getSeconds());
    var minutes = this.padTime(this._currentTime.getMinutes());
    var hours = this.padTime(this._currentTime.getHours());

    $seconds.html(seconds);
    $minutes.html(minutes);
    $hours.html(hours);
  }

  Time.prototype.setInitial = function(){
    this.updateElTime();
    this.updateBackground();
  }

  Time.prototype.padTime = function(time){
    if (time >= 10){
      return time;
    } else {
      return "0" + time;
    }
  }

  Time.prototype.timeToHex = function(){
    //returns hex of time
    var seconds = this.padTime(this._currentTime.getSeconds());
    var minutes = this.padTime(this._currentTime.getMinutes());
    var hours = this.padTime(this._currentTime.getHours());

    return "" + hours + minutes + seconds;
  }

  Time.prototype.updateBackground = function(){
    var hexTime = this.timeToHex();
    this._$colorEl.html("#" + hexTime);
    $("body").css({
      background: "#" + hexTime
    })
  }

  Time.prototype.start = function(){
    window.setInterval(function(){
      this.setNewTime();
      this.updateElTime();
      this.updateBackground();
    }.bind(this), 1000);
  }


  var timeEl = document.getElementById("time");
  var colorEl = document.getElementById("color");

  new Time(timeEl, colorEl);
})
