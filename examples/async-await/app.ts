'use strict';

class Dish {
	private type: string;
	
	constructor(type: string) {
		this.type = type;
	}
}

async function washDish(dish: Dish): Promise<Dish> {
	console.log('Washing dish...');
	return dish;
}

async function dryDish(dish: Dish): Promise<Dish> {
	console.log('Drying dish...');
	return dish;
}

async function turnoverDish(dish: Dish): Promise<Dish> {
	console.log('Turning-over dish...');
	return dish;
}

var dirtyDish = new Dish('cup');

var process = async (dirtyDish) => {
	var washedDish = await washDish(dirtyDish);
	var driedDish = await dryDish(washedDish);
	return await turnoverDish(driedDish);		
};

var cleanDish = process(dirtyDish).then((dish) => {
	console.log('done!');
});