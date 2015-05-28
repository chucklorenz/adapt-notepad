/*
 * adapt-notepad
 * License - http://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chuck.lorenz@kineo.com>
 */
define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Notepad = ComponentView.extend({
        events: {
            'click button': 'onButtonClicked',
            'blur textarea': 'storeUserAnswer'
        },

        //preRender: function() {
            // Checks to see if the notepad should be reset on revisit
            //this.checkIfResetOnRevisit();
        //},

        postRender: function() {
            this.setReadyStatus();

            if (this.model.get('userInput')) {
                this.resetUserAnswer();
            }

            // Check if instruction or body is set, otherwise force completion
            var cssSelector = this.$('.component-instruction').length > 0
                ? '.component-instruction'
                : (this.$('.component-body').length > 0 ? '.component-body' : null);

            if (!cssSelector) {
                this.setCompletionStatus();
            } else {
                this.model.set('cssSelector', cssSelector);
                this.$(cssSelector).on('inview', _.bind(this.inview, this));
            }
        },

        //This preserve the state of the users answers for returning or showing the users answer
        storeUserAnswer: function() {
            this.model.set('userInput', this.$('textarea').val());
        },

        // Used by the question view to reset the stored user answer
        resetUserAnswer: function() {
            this.$('textarea').val(this.model.Get('userInput'));
            this.forceFixedPositionFakeScroll();
        },

        forceFixedPositionFakeScroll: function() {
            if (Modernizr.touch) {
                _.defer(function() {
                    window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                });
            }
        },

        onButtonClicked: function() {
            this.$('.textinput-item-textbox').val('');
            this.storeUserAnswer();
        },

        // Used to check if the notepad should reset on revisit
        //checkIfResetOnRevisit: function() {
        //    var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
        //    if (isResetOnRevisit) {
        //        this.model.reset(isResetOnRevisit);
        //    }
        //},

        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$(this.model.get('cssSelector')).off('inview');
                    this.setCompletionStatus();
                }
            }
        }

    });

    Adapt.register('notepad', Notepad);

    return Notepad;

});
