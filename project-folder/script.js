const apiUrl = '/api/temperature';

async function fetchTemperature() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    temperature = data.temperature;
    updateDisplay();
}

async function updateTemperature(newTemp) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newTemperature: newTemp }),
    });
    const data = await response.json();
    temperature = data.temperature;
    updateDisplay();
}

decreaseBtn.addEventListener('click', async () => {
    if (temperature > 18) {
        await updateTemperature(temperature - 1);
    }
});

increaseBtn.addEventListener('click', async () => {
    if (temperature < 30) {
        await updateTemperature(temperature + 1);
    }
});

// 초기 온도 가져오기
fetchTemperature();
