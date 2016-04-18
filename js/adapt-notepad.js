/*
 * adapt-notepad
 * License - http://github.com/adaptlearning/adapt_framework/blob/master/LICENSE
 * Maintainers - Chuck Lorenz <chucklorenz@yahoo.com>
 */
define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var Notepad = ComponentView.extend({
        events: {
            'click button': 'onClearButtonClicked',
            'blur textarea': 'storeUserAnswer'
        },

        postRender: function() {
            this.setReadyStatus();
            if (this.model.get('userInput')) this.resetUserAnswer();
            this.$('.notepad-widget').on('inview', _.bind(this.inview, this));
        },

        storeUserAnswer: function() {
            this.model.set('userInput', this.$('textarea').val());
        },

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

        onClearButtonClicked: function() {
            this.$('.textinput-item-textbox').val('');
            this.storeUserAnswer();
        },

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
                    this.$(this.model.get('.notepad-widget')).off('inview');
                    this.setCompletionStatus();
                }
            }
        }

    });

    Adapt.register('notepad', Notepad);

    return Notepad;

});
