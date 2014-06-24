/**
 * Created by gavin on 6/24/14.
 */
$.event.special.tap = {
    // Abort tap if touch lasts longer than half a second
    timeThreshold: 500,
    setup: function() {
        var self = this,
            $self = $(self);

        // Bind touch start
        $self.on('touchstart', function(startEvent) {
            // Save the target element of the start event
            var target = startEvent.target,
                timeout;

            function removeTapHandler() {
                clearTimeout(timeout);
                $self.off('touchend', tapHandler);
            };

            function tapHandler(endEvent) {
                removeTapHandler();

                // When the touch end event fires, check if the target of the
                // touch end is the same as the target of the start, and if
                // so, fire a click.
                if (target == endEvent.target) {
                    $.event.simulate('tap', self, endEvent);
                }
            };

            // Remove the tap handler if the timeout expires
            timeout = setTimeout(removeTapHandler, $.event.special.tap.timeThreshold);

            // When a touch starts, bind a touch end handler
            $self.on('touchend', tapHandler);
        });
    }
};