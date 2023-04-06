gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.page-header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.page-header',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

  let itemsL = gsap.utils.toArray('.portfolio__item--left .portfolio__picture')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

  let itemsR = gsap.utils.toArray('.portfolio__item--right .portfolio__picture')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: '-100',
				scrub: true
			}
		})
	})
}
