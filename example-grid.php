<aside>
	
	<div class='prototype-buttons'>

		<button class='guidelines-button'>
			Grid
		</button>

		<button class='colors-button'>
			Colors
		</button>

	</div>

	<div class='themes-selector'>

		<button data-theme='theme--default' class='active'>
			Default 
		</button>

		

	</div>

	<div class='breakpoint-indicator'></div>

	<div class='guidelines-grid'>
		<div class='container'>
			<div class='row'>
				
				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

				<div class='col-3 col-sm-2 col-md-1'>
					<div class='block'></div>
				</div>

			</div>
		</div>
	</div>

</aside>

<style>
	.prototype-buttons {
		position: fixed;
		z-index: 99999;
		top: .25rem;
		left: .25rem;
		display: flex;
		gap: .25rem;

		& button {
			background-color: black;
			font-size: .5rem;
			color: white;
			line-height: 1;
			padding: .25rem;
			opacity: .5;
			transition: .3s ease-in-out;

			&:hover {
				opacity: .75;
			}
		}
	}

	.themes-selector {
		position: fixed;
		z-index: 99999;
		top: 50%;
		transform: translateY(-50%) translateX(-110%);
		left: .1rem;
		display: flex;
		flex-direction: column;
		gap: .2rem;
		transition: .3s ease-in-out;

		&.visible {
			transform: translateY(-50%);
		}

		& button {
			background-color: black;
			font-size: .75rem;
			color: white;
			line-height: 1;
			padding: .5rem .325rem;
			transition: .3s ease-in-out;

			&:hover {
				transform: translateX(.25rem);
			}
		}
	}

	.guidelines-grid {
		position: fixed;
		overflow: hidden;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		height: 0;
		pointer-events: none;
		transition: .3s ease-in-out;

		&.visible {
			height: 100%;
		}

		& .block {
			display: block;
			width: 100%;
			height: 100lvh;
			background-color: rgba(255, 0, 0, .2);
		}
	}

	.breakpoint-indicator {
		&:before {
			content: 'mob';
			display: block;
			position: fixed;
			bottom: 0;
			left: 0;
			margin: 10px;
			padding: 5px;
			font-size: 12px;
			line-height: 1;
			color: white;
			background: black;
			z-index: 99999999999;
			opacity: .375;
			font-family: sans-serif;
			pointer-events: none;

			@media only screen and (min-width: 421px) {
				content: 'xs';
			}

			@media only screen and (min-width: 576px) {
				content: 'sm';
			}

			@media only screen and (min-width: 768px) {
				content: 'md';
			}

			@media only screen and (min-width: 993px) {
				content: 'lg';
			}

			@media only screen and (min-width: 1201px) {
				content: 'xl';
			}

			@media only screen and (min-width: 1401px) {
				content: '2xl';
			}

			@media only screen and (min-width: 1601px) {
				content: '3xl';
			}
		}
	}
</style>

<script>
	const btnViewGrid = document.querySelector('.guidelines-button')
	const gridViews = document.querySelector('.guidelines-grid')
	const btnColors = document.querySelector('.colors-button')
	const themes = document.querySelector('.themes-selector')
	const themeButtons = document.querySelectorAll('.themes-selector button')

	// function to toggle grid
	const toggleGrid = () => {
		gridViews.classList.toggle('visible')
	}

	// toggle grid while pressing shift+g (same shortcut as figma)
	document.addEventListener('keydown', function(event) {
		if (event.shiftKey && event.key.toLowerCase() === 'g') {
			toggleGrid()
		}
	})

	// toggle grid on button click
	btnViewGrid.addEventListener('click', function() {
		toggleGrid()
	})

	// function to toggle colors
	const toggleColors = () => {
		themes.classList.toggle('visible')
	}

	// toggle colors while pressing shift+c
	document.addEventListener('keydown', function(event) {
		if (event.shiftKey && event.key.toLowerCase() === 'c') {
			toggleColors()
		}

		if (event.key.toLowerCase() === 'escape') {
			themes.classList.remove('visible')
		}
	})

	// toggle colors on button click
	btnColors.addEventListener('click', function() {
		toggleColors()
	})

	// function to change the theme
	const changeTheme = (event) => {

		// remove all theme--* classes from body
		document.body.classList.forEach(className => {
			if (className.startsWith('theme--')) {
				document.body.classList.remove(className)
			}
		})

		// get the new theme from data-theme attribute of the clicked button
		const newTheme = event.target.getAttribute('data-theme')
		if (newTheme) {
			document.body.classList.add(newTheme)
		}

		// remove active class from all buttons
		themeButtons.forEach(button => button.classList.remove('active'))

		// add active class to the clicked button
		event.target.classList.add('active')
	}

	// click function to change the theme
	themeButtons.forEach(button => {
		button.addEventListener('click', changeTheme)
	})
</script>

