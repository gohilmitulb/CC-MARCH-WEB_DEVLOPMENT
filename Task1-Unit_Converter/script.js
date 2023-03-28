function showham() {
	const hamburgerIcon = document.querySelector('#hamburger-icon');
	document.querySelector('.hamburger').classList.toggle('show_hamburger');
	hamburgerIcon.classList.toggle('fa-bars');
	hamburgerIcon.classList.toggle('fa-times');
}

const menu_length = document.getElementById('menu-length');
const menu_weight = document.getElementById('menu-weight');
const menu_temperature = document.getElementById('menu-temperature');
const menu_time = document.getElementById('menu-time');
const menu_area = document.getElementById('menu-area');
const menu_energy = document.getElementById('menu-energy');
const menu_power = document.getElementById('menu-power');
const menu_pressure = document.getElementById('menu-pressure');
const menu_speed = document.getElementById('menu-speed');
const menu_more = document.getElementById('hamburger-icon');

const length = document.getElementById('showlength');
const weight = document.getElementById('showweight');
const temperature = document.getElementById('showtemperature');
const time = document.getElementById('showtime');
const area = document.getElementById('showarea');
const energy = document.getElementById('showenergy');
const power = document.getElementById('showpower');
const pressure = document.getElementById('showpressure');
const speed = document.getElementById('showspeed');

menu_length.addEventListener('click', function () {
	length.style.display = 'inline-flex';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.add('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.remove('active');
});

menu_weight.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'inline-flex';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.add('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.remove('active');
});

menu_temperature.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'inline-flex';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.add('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.remove('active');
});

menu_time.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'inline-flex';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.add('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.remove('active');
});

menu_area.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'inline-flex';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.add('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.remove('active');
});

menu_energy.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'inline-flex';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.add('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.add('active');
});

menu_power.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'inline-flex';
	pressure.style.display = 'none';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.add('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.remove('active');
	menu_more.classList.add('active');
});

menu_pressure.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'inline-flex';
	speed.style.display = 'none';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.add('active');
	menu_speed.classList.remove('active');
	menu_more.classList.add('active');
});

menu_speed.addEventListener('click', function () {
	length.style.display = 'none';
	weight.style.display = 'none';
	temperature.style.display = 'none';
	time.style.display = 'none';
	area.style.display = 'none';
	energy.style.display = 'none';
	power.style.display = 'none';
	pressure.style.display = 'none';
	speed.style.display = 'inline-flex';

	menu_length.classList.remove('active');
	menu_weight.classList.remove('active');
	menu_temperature.classList.remove('active');
	menu_time.classList.remove('active');
	menu_area.classList.remove('active');
	menu_energy.classList.remove('active');
	menu_power.classList.remove('active');
	menu_pressure.classList.remove('active');
	menu_speed.classList.add('active');
	menu_more.classList.add('active');
});

function convertLength() {
	// Get input and output elements
	const input = document.querySelector('.lengthfrom input');
	const output = document.querySelector('.lengthto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.lengthfrom select').value);
	const outputUnit = Number(document.querySelector('.lengthto select').value);

	// Get input value and convert to meters
	const inputValue = Number(input.value);
	let meters = 0;

	switch (inputUnit) {
		case 1: // Meter
			meters = inputValue;
			break;
		case 2: // Centimeter
			meters = inputValue / 100;
			break;
		case 3: // Kilometer
			meters = inputValue * 1000;
			break;
		case 4: // Millimeter
			meters = inputValue / 1000;
			break;
		case 5: // Micrometer
			meters = inputValue / 1000000;
			break;
		case 6: // Nanometer
			meters = inputValue / 1000000000;
			break;
		case 7: // Mile
			meters = inputValue * 1609.344;
			break;
		case 8: // Yard
			meters = inputValue / 1.0936;
			break;
		case 9: // Foot
			meters = inputValue / 3.2808;
			break;
		case 10: // Inch
			meters = inputValue / 39.370;
			break;
		case 11: // Light Year
			meters = inputValue * 9460730472580800;
			break;
	}

	// Convert meters to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // Meter
			outputValue = meters;
			break;
		case 2: // Centimeter
			outputValue = meters * 100;
			break;
		case 3: // Kilometer
			outputValue = meters / 1000;
			break;
		case 4: // Millimeter
			outputValue = meters * 1000;
			break;
		case 5: // Micrometer
			outputValue = meters * 1000000;
			break;
		case 6: // Nanometer
			outputValue = meters * 1000000000;
			break;
		case 7: // Mile
			outputValue = meters / 1609.344;
			break;
		case 8: // Yard
			outputValue = meters * 1.0936;
			break;
		case 9: // Foot
			outputValue = meters * 3.2808;
			break;
		case 10: // Inch
			outputValue = meters * 39.370;
			break;
		case 11: // Light Year
			outputValue = meters / 9460730472580800;
			break;
	}

	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertWeight() {
	// Get input and output elements
	const input = document.querySelector('.weightfrom input');
	const output = document.querySelector('.weightto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.weightfrom select').value);
	const outputUnit = Number(document.querySelector('.weightto select').value);

	// Get input value and convert to kilograms
	const inputValue = Number(input.value);
	let kilograms = 0;

	switch (inputUnit) {
		case 1: // Kilogram
			kilograms = inputValue;
			break;
		case 2: // Gram
			kilograms = inputValue / 1000;
			break;
		case 3: // Milligram
			kilograms = inputValue / 1000000;
			break;
		case 4: // Metric Ton
			kilograms = inputValue * 1000;
			break;
		case 5: // Long Ton
			kilograms = inputValue * 1016.04691;
			break;
		case 6: // Short Ton
			kilograms = inputValue * 907.18474;
			break;
		case 7: // Pound
			kilograms = inputValue / 2.20462;
			break;
		case 8: // Ounce
			kilograms = inputValue / 35.274;
			break;
		case 9: // Carrat
			kilograms = inputValue / 5000;
			break;
		case 10: // Atomic Mass Unit
			kilograms = inputValue * 1.66054e-27;
			break;
	}

	// Convert kilograms to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // Kilogram
			outputValue = kilograms;
			break;
		case 2: // Gram
			outputValue = kilograms * 1000;
			break;
		case 3: // Milligram
			outputValue = kilograms * 1000000;
			break;
		case 4: // Metric Ton
			outputValue = kilograms / 1000;
			break;
		case 5: // Long Ton
			outputValue = kilograms / 1016.04691;
			break;
		case 6: // Short Ton
			outputValue = kilograms / 907.18474;
			break;
		case 7: // Pound
			outputValue = kilograms * 2.20462;
			break;
		case 8: // Ounce
			outputValue = kilograms * 35.274;
			break;
		case 9: // Carrat
			outputValue = kilograms * 5000;
			break;
		case 10: // Atomic Mass Unit
			outputValue = kilograms / 1.66054e-27;
			break;
	}

	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertTemperature() {
	// Get input and output elements
	const input = document.querySelector('.temperaturefrom input');
	const output = document.querySelector('.temperatureto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.temperaturefrom select').value);
	const outputUnit = Number(document.querySelector('.temperatureto select').value);

	// Get input value and convert to celsius
	const inputValue = Number(input.value);
	let celsius = 0;

	switch (inputUnit) {
		case 1: // celsius
			celsius = inputValue;
			break;
		case 2: // kelvin
			celsius = inputValue - 273.15;
			break;
		case 3: // fahrenheit
			celsius = (inputValue - 32) * 5 / 9;
			break;
	}

	// Convert celsius to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // celsius
			outputValue = celsius;
			break;
		case 2: // kelvin
			outputValue = celsius + 273.15;
			break;
		case 3: // fahrenheit
			outputValue = celsius * 9 / 5 + 32;
			break;
	}

	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertTime() {
	// Get input and output elements
	const input = document.querySelector('.timefrom input');
	const output = document.querySelector('.timeto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.timefrom select').value);
	const outputUnit = Number(document.querySelector('.timeto select').value);

	// Get input value and convert to second
	const inputValue = Number(input.value);
	let seconds = 0;

	switch (inputUnit) {
		case 1: // seconds
			seconds = inputValue;
			break;
		case 2: // milliseconds
			seconds = inputValue / 1000;
			break;
		case 3: // microseconds
			seconds = inputValue / 1000000;
			break;
		case 4: // nanoseconds
			seconds = inputValue / 1000000000;
			break;
		case 5: // picoseconds
			seconds = inputValue / 1000000000000;
			break;
		case 6: // minute
			seconds = inputValue * 60;
			break;
		case 7: // hour
			seconds = inputValue * 60 * 60;
			break;
		case 8: // day
			seconds = inputValue * 60 * 60 * 24;
			break;
		case 9: // week
			seconds = inputValue * 60 * 60 * 24 * 7;
			break;
		case 10: // month (30 days)
			seconds = inputValue * 60 * 60 * 24 * 30;
			break;
		case 11: // year (365 days)
			seconds = inputValue * 60 * 60 * 24 * 365;
			break;
	}

	// Convert seconds to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // second
			outputValue = seconds;
			break;
		case 2: // millisecond
			outputValue = seconds * 1000;
			break;
		case 3: // microsecond
			outputValue = seconds * 1000000;
			break;
		case 4: // nanosecond
			outputValue = seconds * 1000000000;
			break;
		case 5: // picosecond
			outputValue = seconds * 1000000000000;
			break;
		case 6: // minute
			outputValue = seconds / 60;
			break;
		case 7: // hour
			outputValue = seconds / (60 * 60);
			break;
		case 8: // day
			outputValue = seconds / (60 * 60 * 24);
			break;
		case 9: // week
			outputValue = seconds / (60 * 60 * 24 * 7);
			break;
		case 10: // month (30 days)
			outputValue = seconds / (60 * 60 * 24 * 30);
			break;
		case 11: // year (365 days)
			outputValue = seconds / (60 * 60 * 24 * 365);
			break;
	}

	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertArea() {
	// Get input and output elements
	const input = document.querySelector('.areafrom input');
	const output = document.querySelector('.areato input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.areafrom select').value);
	const outputUnit = Number(document.querySelector('.areato select').value);

	// Get input value and convert to square meter
	const inputValue = Number(input.value);
	let SqMeters = 0;

	switch (inputUnit) {
		case 1: // square meter
			SqMeters = inputValue;
			break;
		case 2: // square kilometer
			SqMeters = inputValue * 1000000;
			break;
		case 3: // square centimeter
			SqMeters = inputValue / 10000;
			break;
		case 4: // square millimeter
			SqMeters = inputValue / 1000000;
			break;
		case 5: // square micrometer
			SqMeters = inputValue / 1000000000000;
			break;
		case 6: // hectare
			SqMeters = inputValue * 10000;
			break;
		case 7: // square mile
			SqMeters = inputValue * 2589988.11;
			break;
		case 8: // square yard
			SqMeters = inputValue / 1.19599;
			break;
		case 9: // square foot
			SqMeters = inputValue / 10.7639;
			break;
		case 10: // square inch
			SqMeters = inputValue / 1550.0031;
			break;
		case 11: // acre
			SqMeters = inputValue * 4046.85642;
			break;
	}

	// Convert sqmeters to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // square meter
			outputValue = SqMeters;
			break;
		case 2: // square kilometer
			outputValue = SqMeters / 1000000;
			break;
		case 3: // square centimeter
			outputValue = SqMeters * 10000;
			break;
		case 4: // square millimeter
			outputValue = SqMeters * 1000000;
			break;
		case 5: // square micrometer
			outputValue = SqMeters * 1000000000000;
			break;
		case 6: // hectare
			outputValue = SqMeters / 10000;
			break;
		case 7: // square mile
			outputValue = SqMeters / 2589988.11;
			break;
		case 8: // square yard
			outputValue = SqMeters * 1.19599;
			break;
		case 9: // square foot
			outputValue = SqMeters * 10.7639;
			break;
		case 10: // square inch
			outputValue = SqMeters * 1550.0031;
			break;
		case 11: // acre
			outputValue = SqMeters / 4046.85642;
			break;
	}

	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertEnergy() {
	// Get input and output elements
	const input = document.querySelector('.energyfrom input');
	const output = document.querySelector('.energyto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.energyfrom select').value);
	const outputUnit = Number(document.querySelector('.energyto select').value);

	// Get input value and convert to joule
	const inputValue = Number(input.value);
	let joule = 0;

	switch (inputUnit) {
		case 1: // joule
			joule = inputValue;
			break;
		case 2: // kilojoule
			joule = inputValue * 1000;
			break;
		case 3: // kilowatt-hour
			joule = inputValue * 3600000;
			break;
		case 4: // watt-hour
			joule = inputValue * 3600;
			break;
		case 5: // calorie
			joule = inputValue * 4.184;
			break;
		case 6: // kilocalorie
			joule = inputValue * 4184;
			break;
		case 7: // btu
			joule = inputValue * 1055.06;
			break;
		case 8: // megajoule
			joule = inputValue * 1000000;
			break;
		case 9: // gigajoule
			joule = inputValue * 1000000000;
			break;
		case 10: // electron-volt
			joule = inputValue * 1.602176634e-19;
			break;
	}

	// Convert joule to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // joule
			outputValue = joule;
			break;
		case 2: // kilojoule
			outputValue = joule / 1000;
			break;
		case 3: // kilowatt-hour
			outputValue = joule / 3600000;
			break;
		case 4: // watt-hour
			outputValue = joule / 3600;
			break;
		case 5: // calorie
			outputValue = joule / 4.184;
			break;
		case 6: // kilocalorie
			outputValue = joule / 4184;
			break;
		case 7: // btu
			outputValue = joule / 1055.06;
			break;
		case 8: // megajoule
			outputValue = joule / 1000000;
			break;
		case 9: // gigajoule
			outputValue = joule / 1000000000;
			break;
		case 10: // electron-volt
			outputValue = joule / (1.602176634e-19);
			break;
	}
	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertPower() {
	// Get input and output elements
	const input = document.querySelector('.powerfrom input');
	const output = document.querySelector('.powerto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.powerfrom select').value);
	const outputUnit = Number(document.querySelector('.powerto select').value);

	// Get input value and convert to watt
	const inputValue = Number(input.value);
	let watt = 0;

	switch (inputUnit) {
		case 1: // watt
			watt = inputValue;
			break;
		case 2: // kilowatt
			watt = inputValue * 1000;
			break;
		case 3: // megawatt
			watt = inputValue * 1000000;
			break;
		case 4: // gigawatt
			watt = inputValue * 1000000000;
			break;
		case 5: // exawatt
			watt = inputValue * 1000000000000000000;
			break;
		case 6: // petawatt
			watt = inputValue * 1000000000000000;
			break;
		case 7: // terawatt
			watt = inputValue * 1000000000000;
			break;
		case 8: // btu/hr
			watt = inputValue * 0.29307107;
			break;
		case 9: // mbtu/hr
			watt = inputValue * 293071.07;
			break;
		case 10: // calorie/hr
			watt = inputValue * 0.00116222222;
			break;
		case 11: // kilocalorie/hr
			watt = inputValue * 1.16222222;
			break;
		case 12: // joule/s
			watt = inputValue;
			break;
		case 13: // horsepower
			watt = inputValue * 745.7;
			break;
		case 14: // foot-pounds/s
			watt = inputValue * 1.35582;
			break;
	}

	// Convert watt to output unit
	let outputValue = 0;

	switch (outputUnit) {
		case 1: // watt
			outputValue = watt;
			break;
		case 2: // kilowatt
			outputValue = watt / 1000;
			break;
		case 3: // megawatt
			outputValue = watt / 1000000;
			break;
		case 4: // gigawatt
			outputValue = watt / 1000000000;
			break;
		case 5: // exawatt
			outputValue = watt / 1000000000000000000;
			break;
		case 6: // petawatt
			outputValue = watt / 1000000000000000;
			break;
		case 7: // terawatt
			outputValue = watt / 1000000000000;
			break;
		case 8: // btu/hr
			outputValue = watt / 0.29307107;
			break;
		case 9: // mbtu/hr
			outputValue = watt / 293071.07;
			break;
		case 10: // calorie/hr
			outputValue = watt / 0.00116222222;
			break;
		case 11: // kilocalorie/hr
			outputValue = watt / 1.16222222;
			break;
		case 12: // joule/s
			outputValue = watt;
			break;
		case 13: // horsepower
			outputValue = watt / 745.7;
			break;
		case 14: // foot-pounds/s
			outputValue = watt / 1.35582;
			break;
	}
	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertPressure() {
	// Get input and output elements
	const input = document.querySelector('.pressurefrom input');
	const output = document.querySelector('.pressureto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.pressurefrom select').value);
	const outputUnit = Number(document.querySelector('.pressureto select').value);

	// Get input value and convert to pascal
	const inputValue = Number(input.value);
	let pascal = 0;

	switch (inputUnit) {
		case 1: // Pascal
			pascal = inputValue;
			break;
		case 2: // Kilopascal
			pascal = inputValue * 1000;
			break;
		case 3: // Bar
			pascal = inputValue * 100000;
			break;
		case 4: // PSI
			pascal = inputValue * 6894.76;
			break;
		case 5: // KSI
			pascal = inputValue * 6894760;
			break;
		case 6: // Standard atmosphere
			pascal = inputValue * 101325;
			break;
		case 7: // Newton/square meter
			pascal = inputValue;
			break;
		case 8: // Pound-force/square inch
			pascal = inputValue * 6894.76;
			break;
		case 9: // Torr
			pascal = inputValue * 133.322;
			break;
		case 10: // Millimeter of mercury
			pascal = inputValue * 133.322;
			break;
		case 11: // Inches of mercury
			pascal = inputValue * 3386.39;
			break;
		case 12: // Barad
			pascal = inputValue * 0.1;
			break;
	}

	// convert from base unit to desired unit
	let outputValue = 0;
	switch (outputUnit) {
		case 1: // Pascal
			outputValue = pascal;
			break;
		case 2: // Kilopascal
			outputValue = pascal / 1000;
			break;
		case 3: // Bar
			outputValue = pascal / 100000;
			break;
		case 4: // PSI
			outputValue = pascal / 6894.76;
			break;
		case 5: // KSI
			outputValue = pascal / 6894760;
			break;
		case 6: // Standard atmosphere
			outputValue = pascal / 101325;
			break;
		case 7: // Newton/square meter
			outputValue = pascal;
			break;
		case 8: // Pound-force/square inch
			outputValue = pascal / 6894.76;
			break;
		case 9: // Torr
			outputValue = pascal / 133.322;
			break;
		case 10: // Millimeter of mercury
			outputValue = pascal / 133.322;
			break;
		case 11: // Inches of mercury
			outputValue = pascal / 3386.39;
			break;
		case 12: // Barad
			outputValue = pascal / 0.1;
			break;
	}
	// Display output value
	output.value = outputValue.toFixed(4);
}

function convertSpeed() {
	// Get input and output elements
	const input = document.querySelector('.speedfrom input');
	const output = document.querySelector('.speedto input');

	// Get input and output unit values
	const inputUnit = Number(document.querySelector('.speedfrom select').value);
	const outputUnit = Number(document.querySelector('.speedto select').value);

	// Get input value and convert to meter_per_second
	const inputValue = Number(input.value);
	let meter_per_second = 0;

	switch (inputUnit) {
		case 1: // meter_per_second
			meter_per_second = inputValue;
			break;
		case 2: // Kilometer_per_hour
			meter_per_second = inputValue / 3.6;
			break;
		case 3: // mph
			meter_per_second = inputValue / 2.237;
			break;
		case 4: // rpm
			meter_per_second = inputValue * 0.10472;
			break;
		case 5: // ft/s
			meter_per_second = inputValue / 3.281;
			break;
		case 6: // Knots
			meter_per_second = inputValue / 1.944;
			break;
		case 7: // Mach
			meter_per_second = inputValue * 340.3;
			break;
		case 8: // Mach number (Ma)
			meter_per_second = inputValue * 340.3 * Math.sqrt(1.4 * 287.05 * 273.15) / Math.sqrt(273.15);
			break;
		case 9: // Hz
			meter_per_second = inputValue * 2 * Math.PI;
			break;
		case 10: // m/min
			meter_per_second = inputValue / 60;
			break;
		case 11: // c
			meter_per_second = inputValue;
			break;
	}

	// convert from meter_per_second to desired unit
	let outputValue = 0;
	switch (outputUnit) {
		case 1: // meter_per_second
			outputValue = meter_per_second;
			break;
		case 2: // Kilometer_per_hour
			outputValue = meter_per_second * 3.6;
			break;
		case 3: // mph
			outputValue = meter_per_second * 2.237;
			break;
		case 4: // rpm
			outputValue = meter_per_second / 0.10472;
			break;
		case 5: // ft/s
			outputValue = meter_per_second * 3.281;
			break;
		case 6: // Knots
			outputValue = meter_per_second * 1.944;
			break;
		case 7: // Mach
			outputValue = meter_per_second / 340.3;
			break;
		case 8: // Mach number (Ma)
			outputValue = meter_per_second / (340.3 * Math.sqrt(1.4 * 287.05 * 273.15) / Math.sqrt(273.15));
			break;
		case 9: // Hz
			outputValue = meter_per_second / (2 * Math.PI);
			break;
		case 10: // m/min
			outputValue = meter_per_second * 60;
			break;
		case 11: // c
			outputValue = inputValue;
			break;
	}

	// Display output value
	output.value = outputValue.toFixed(4);
}


// Attach the function to the 'input' event of the input element
document.querySelector('.lengthfrom input').addEventListener('input', convertLength);
document.querySelector('.weightfrom input').addEventListener('input', convertWeight);
document.querySelector('.temperaturefrom input').addEventListener('input', convertTemperature);
document.querySelector('.timefrom input').addEventListener('input', convertTime);
document.querySelector('.areafrom input').addEventListener('input', convertArea);
document.querySelector('.energyfrom input').addEventListener('input', convertEnergy);
document.querySelector('.powerfrom input').addEventListener('input', convertPower);
document.querySelector('.pressurefrom input').addEventListener('input', convertPressure);
document.querySelector('.speedfrom input').addEventListener('input', convertSpeed);

