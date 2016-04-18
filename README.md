#adapt-notepad

<img src="/notepad.jpg?raw=true" align="right">A very simple component that merely presents a textarea for the learner to keep notes throughout the session (or until she clicks the Clear button). There is no Submit button; it does not send or store the data anywhere. This component is most useful if the course is taught in a group of learners, and the learners need a place to hold questions and comments until the appropriate time. It is less useful (not useful??) when the learner works through the course alone, since the contents are erased when the session is terminated.

##Installation

To install **Notepad** in the Adapt framework, use the [repository](https://github.com/chucklorenz/adapt-notepad)'s "Download ZIP" button; extract the folder; move the folder into *src/components*. Then run `grunt build`  

To install **Notepad** in the Adapt authoring tool using the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager).  
<div float align=right><a href="#top">Back to Top</a></div>

## Settings Overview

The attributes listed below are used in *components.json* to configure **Notepad**, and are properly formatted as JSON in [*example.json*](https://github.com/chucklorenz/adapt-notepad/blob/master/example.json). 

### Attributes 

In addition to the attributes specifically listed below, **Notepad** implements the [**core model attributes**](https://github.com/adaptlearning/adapt_framework/wiki/Core-model-attributes) inherited by every Adapt component. They have no default values. Like the attributes below, their values are assigned in *components.json*. 

**_component** (string): This value must be: `notepad`.

**_classes** (string): CSS class name to be applied to **Notepad**’s containing `div`. The class must be predefined in one of the Less files. Separate multiple classes with a space.   If completing the component is optional, use the built-in class `"no-state"` to prevent assistive technology such as screen readers from anouncing whether it is complete or incomplete. 

**_layout** (string): This defines the horizontal position of the component in the block. Acceptable values are `full`, `left` or `right`. 

**instruction** (string): This optional text appears above the component. It is frequently used to guide the learner’s interaction with the component.  

**placeholder** (string): Text that appears within the textarea before the learner enters any input.

**btnText** (string): Text that appears on the button. 

**_maxlength** (number): The HTML `maxlength` attribute of the textarea. Restricts the number of characters that may be entered.  
<div float align=right><a href="#top">Back to Top</a></div>

### Accessibility
**Notepad** has been assigned a label using the [aria-label](https://github.com/adaptlearning/adapt_framework/wiki/Aria-Labels) attribute: **ariaRegion**. This label is not a visible element. It is utilized by assistive technology such as screen readers. Should the region's text need to be customised, it can be found within the **_globals** object in [*properties.schema*](https://github.com/adaptlearning/adapt-notepad/blob/master/properties.schema).   
<div float align=right><a href="#top">Back to Top</a></div>

## Limitations  
 
No known limitations.

----------------------------
**Version number:**  1.0.0   
**Framework versions:** ^2.0  
**Author / maintainer:** Chuck Lorenz  
**Accessibility support:** WAI AA   
**RTL support:** yes  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, IE10, IE9, IE8, IE Mobile 11, Safari for iPhone (iOS 8+9), Safari for iPad (iOS 8+9), Safari 8, Opera  



