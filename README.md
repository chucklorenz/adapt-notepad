#adapt-notepad

A very simple component that merely presents a textarea for the learner to keep notes throughout the session (or until she clicks the Clear button). There is no Submit button; it does not send or store the data anywhere.
Note: While this works as is, I have not yet had time to "clean it up" or to make it compatible with the authoring tool. 


##Installation

First, be sure to install the [Adapt Command Line Interface](https://github.com/adaptlearning/adapt-cli), then from the command line run:-

        adapt install adapt-notepad

This component can also be installed by adding the component to the adapt.json file before running `adapt install`:

        "adapt-notepad": "*"

##Usage

This component is most useful if the course is taught in a group of learners, and the learners need a place to hold questions and comments until the appropriate time. It is less useful (not useful??) when the learner works through the course alone, since the contents are erased when the session is terminated.

##Settings overview

####_component

This value must be: `notepad`

####_classes

You can use this setting to add custom classes to your template and LESS file.

####_layout

This defines the position of the component in the block. Values can be `full`, `left` or `right`. 

####displayTitle and body

The `displayTitle` and `body` settings can be left blank. Although the blank component could be used instead: [adapt-contrib-blank](https://github.com/adaptlearning/adapt-contrib-blank)

####instruction

####btnText

####maxLength



##Limitations

To be completed.

##Browser spec

This component has been tested to the standard Adapt browser specification.

