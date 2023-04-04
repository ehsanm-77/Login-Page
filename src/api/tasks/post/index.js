export async function sendData(URL, endpoint, data) {
  try {
    let send = await fetch(`${URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return send;
  } catch (error) {
    console.log(error);
  }
}
