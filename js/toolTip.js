/*global $, document, ToolTip, closeToolTip */
"use strict";

$(document).ready(function () {

	// set the main function
    function activateToolTip() {
    
    	// set a variable that will grab and store to memory all the tooltips on the page with a "tooltip" class
        var $allToolTips = $('.toolTip');
        
        // when the user clicks any element with this class on it
		$(".js-activateToolTip").click(function (e) {
    		
    		// set a variable of THIS to the clicked link
    		var toolTipSiblings = $(this).siblings('.toolTip')
    	
    		// first let's hide any open tool tips before displaying the selected one
			closeToolTip();
			
			// otherwise show the sibling tooltip to the clicked link and add the open class(for css animation)    		
    		toolTipSiblings.show().addClass('toolTip--open');

            // when the link is clicked stop the click from bubbling up to parent elements
            e.stopPropagation();
        });
        
        // if the user clicks inside the div, don't do anything keep it open
        $allToolTips.click(function (e) {
            e.stopPropagation();
        });
        // close all the tooltips if you click anywhere outside the div and remove the open class(for css animation)
        $(document).click(function () {
            $allToolTips.hide().removeClass('toolTip--open');
        });
       // user can hide the tooltip by pressing the esc key and remove the open class(for css animation)
        $(document).keyup(function (e) {
            if (e.keyCode === 27) {
                closeToolTip();
            }
        });
       
        // close the tooltip when the user clicks the X icon and remove the open class(for css animation)
        $(".toolTip-dismiss").click(function () {
            closeToolTip();
        });
        
        function closeToolTip() { 
    		$allToolTips.hide().removeClass('toolTip--open');
    	}  
    }
    // activate the function
    activateToolTip();
});