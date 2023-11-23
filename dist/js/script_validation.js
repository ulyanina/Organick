//validation
function validateForms(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
         },
         message: {
            required: true
         },
         policy: {
            required: true
         }
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format('Минимальное количество символов: {0}')
			},
			email: {
				required: 'Пожалуйста, введите свой почтовый адрес',
				email: 'Неправильно введен адрес почты'
         },
         message: {
				required: 'Пожалуйста, опишите задачу'
         },
         policy: {
            required: 'Чтобы отправить сообщение Вы должны согласиться с политикой конфиденциальности'
         }
		}
	});
}
validateForms('#contacts__forms-row');