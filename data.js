const icons = [
	{
		Name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'solid',
		color: 'blu'
	},
	{
		Name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'orange'
	},
	{
		Name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'orange'
	},
	{
		Name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'orange'
	},
	{
		Name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'solid',
		color: 'orange'
	},
	{
		Name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'purple'
	},
	{
		Name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'purple'
	},
	{
		Name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'purple'
	},
	{
		Name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'solid',
		color: 'purple'
	}
];

const container = document.querySelector('.row');

stampCards(icons);

function stampCards(array) {
	
	for(let i of array) {

		const {Name, prefix, family, color} = i;

		const card = document.createElement('div');
	 
	 card.classList.add('col-2', 'card');

		card.innerHTML = `<i class="${prefix}${family} ${prefix}${Name} ${color}"></i>
											<span class="text-uppercase">${Name}</span>`;
												

		container.append(card);

	}

}

const select = document.querySelector('select');

select.addEventListener('change', selector);


function selector(){
	selectedOption(icons);
}

function selectedOption(array) {

	const cardType = select.value;

	container.innerHTML = '';

	if(cardType === 'all') {

		stampCards(icons);

	}

	for(let i of array) {

		const {type} = i;

		if(type == cardType) {
			stampSelectedCards(array, i);
		}
	}
	
}


function stampSelectedCards(array, index) {

		const {Name, prefix, family, color} = index;

		const card = document.createElement('div');
	 
	 	card.classList.add('col-2', 'card');

		card.innerHTML = `<i class="${prefix}${family} ${prefix}${Name} ${color}"></i>
											<span class="text-uppercase">${Name}</span>`;
												

		container.append(card);

}


/*
<div class="col-2 card">
  <i class="fa-solid fa-carrot"></i>
  <span class="text-uppercase">carrot</span>
</div>
*/