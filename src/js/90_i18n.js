$.fn.cri18n = function(){
  var words = require('boxes').words	
  $(this).find('[data-i18n-title], [data-i18n-text], [data-i18n-placeholder]').each(function(){
	  var key = $(this).attr('data-i18n-title') || $(this).attr('data-i18n-text') || $(this).attr('data-i18n-placeholder')
	  var val = words[key] || key
	  if($(this).attr('data-i18n-title'))       $(this).attr('title',       val).attr('data-title', val)	
	  if($(this).attr('data-i18n-placeholder')) $(this).attr('placeholder', val)	
	  if($(this).attr('data-i18n-text'))        $(this).text(val)	
  })
}

//функции подменяющие alert, confirm
    var $myAlert = $("#cr-alert");

    var crAlertsObj = {
      alert: function(text){
        $myAlert.removeClass("confirm");
        crAlertsObj._show(text);

        $myAlert.find(".close").show().on("click", function() {
          $myAlert.hide();
          $(".overlay").hide();
        });
      }, 
      confirm: function(text, callback) {
        $myAlert.addClass("confirm");
        crAlertsObj._show(text);

        $myAlert.find(".close").hide();

        crAlertsObj._callback(function(result) {
          if( callback ) callback(result);
        });
      },
      _show:function(text) {
         $myAlert.show().find(".cr-dialog-row").html(text);
         $(".overlay").show();
      },
      _callback: function(callback) {
        $myAlert.find("button.yes").click( function(e) {
          e.preventDefault();
          $(".overlay").hide();

          if( callback ) {
            $myAlert.hide();
            callback(true);
          }
        });

        $myAlert.find("button.no").click( function(e) {
          e.preventDefault();
          $(".overlay").hide();

          if( callback ) {
            $myAlert.hide();
            callback(false);
          }
        });
      }
    }

    var crAlert = function(text) {
      crAlertsObj.alert(text)
    };

    var crConfirm = function(text, callback) {
      crAlertsObj.confirm(text, callback)
    };


define(['css'], function(requireCss){
})


