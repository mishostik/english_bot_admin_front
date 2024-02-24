export const signInRequest = async (loginData) => {
	
	try {
		  const response = await fetch('/api/user/admin/sign_in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify(loginData),
		  });

		if (response.ok) {
			console.log('Success');
		} else {
			console.error('Ooops');
		  }
	} catch (error) {
		  console.error('Ошибка при отправке данных', error);
	}
};
