const mail = document.getElementById('mail'),
	btns = document.querySelectorAll('.btn'),
	containers = document.querySelectorAll('.container'),
	span = document.querySelector('span');

let hasMail;

const changeContainer = () => {
	for (const btn of btns) {
		btn.addEventListener('click', () => {
			console.log('dfghjkl');
			checkError();
			console.log(hasMail);
			console.log(containers[0].classList.contains('done'));
			hasMail || containers[0].classList.contains('done')
				? (containers.forEach(e => e.classList.toggle('done')), clearError())
				: '';
		});
	}
};

const clearError = () => {
	mail.value = '';
	mail.nextElementSibling.innerHTML = ' ';
	mail.style.borderColor = 'var(--grey)';
	hasMail = false;
};

const checkError = () => {
	pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	mail.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML = ' '),
		  (mail.style.borderColor = 'var(--grey)'),
		  (hasMail = true),
		  console.log(hasMail))
		: !mail.value
		? ((mail.nextElementSibling.innerHTML = `Can't be blank`),
		  (mail.style.borderColor = 'var(--tomato)'),
		  (hasMail = false),
		  console.log(hasMail))
		: !mail.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML = 'Valid email required'),
		  (mail.style.borderColor = 'var(--tomato)'),
		  (hasMail = false),
		  console.log(hasMail))
		: ((mail.nextElementSibling.innerHTML = 'Error'),
		  (mail.style.borderColor = 'var(--tomato)'),
		  (hasMail = false),
		  console.log(hasMail));

	span.textContent = mail.value;
};

changeContainer();
