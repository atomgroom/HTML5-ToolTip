* * *

    Atom Groom - Modular HTML5 / CSS3 / JQuery / LESS Tool Tip

* * *  

    Designed and Built by Atom Groom - http://www.atomgroom.com
    All content, design, markup, and css (C) Atom Groom Design, Inc.
    All rights reserved.

* * *

#   Atom Groom - Modular HTML5 / CSS3 / JQuery / LESS Tool Tip

Change Log:

01.04.13

* Initial Commit.  

* I created this as part of a larger project and thought that it might be useful to developers in the open source community.  This tooltip was built to be placed anywhere in a site, activated via class name with JQuery and positioned via class name with CSS.

* The tool tip uses pseudo elements for the triangle pointer.  I used the before and after pseudo element to create two triangles.  Why two triangles? Well, with pseudo elements and CSS triangles, you can't put a border on the triangle. So to create this effect, we create two triangles, and use z-index and positioning. Bam! You now have a triangle with a border.

* The tool tip is dependent upon the structure of the markup in the demo files.  You can place it anywhere, but be sure to keep it consistent.  You will see that in the first demo I have used a span instead of the dialog element, this is because it is not valid to put a dialog in a p element.  The rest of the demos use the HTML5 dialog element.  If you are using this HTML as partial file, it might be best to always use spans so that your pages will validate properly.

* The tool tip is activated via a classname "js-activateToolTip"

* The tooltip position is dependent upon two class names "toolTip" and "toolTip--leftTop".  The second class name will define the position of the tooltip around the anchor element.

* Use any of the following class names to position the tool tip around the anchor element:  "toolTip--topLeft", "toolTip--topCenter" , "toolTip--topRight" , "toolTip--rightTop" , "toolTip--rightMiddle" , "toolTip--rightBottom" , "toolTip--bottomLeft" , "toolTip--bottomCenter" , "toolTip--bottomRight" , "toolTip--leftTop" , "toolTip--leftMiddle" , "toolTip--leftBottom" . Experiment with these class names to get the position you desire.

* The jquery for the tool tip functions as follows: if you open one tool tip all other tool tips will close, if you click anywhere outside of the tool tip that tool tip will close, if you press the esc key that tool tip will close.
