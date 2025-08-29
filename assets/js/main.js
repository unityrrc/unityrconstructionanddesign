/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function () {
  // Defensive "closest" for older browsers/elements PHONE CONVERSIONS
  function findCallLink(start) {
    var n = start;
    while (n && n !== document) {
      if (
        n.tagName &&
        n.tagName.toLowerCase() === 'a' &&
        n.getAttribute &&
        n.getAttribute('href') &&
        n.getAttribute('href').indexOf('tel:') === 0 &&
        n.classList &&
        n.classList.contains('call-link')
      ) {
        return n;
      }
      n = n.parentNode;
    }
    return null;
  }

  document.addEventListener('click', function (ev) {
    var a = findCallLink(ev.target);
    if (!a) return;

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'call_click', {
        event_category: 'lead',
        event_label: a.getAttribute('href'),
        value: 1
      });
    } else {
      // Not fatal—just lets you know if GA4 isn't on the page yet
      console.warn('GA4 gtag() not found when call was clicked.');
    }
  }, false);
})();


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');


	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);