function calculatePi() {
    const precision = document.getElementById("precision").value;
    const totalPoints = parseInt(precision);
    let insideCircle = 0;

    for (let i = 0; i < totalPoints; i++) {
        const x = Math.random();
        const y = Math.random();
        const distance = Math.sqrt(x * x + y * y);

        if (distance <= 1) {
            insideCircle++;
        }
    }

    const piApproximation = (insideCircle / totalPoints) * 4;
    document.getElementById("result").innerText = `Результат: Пи приближенное = ${piApproximation}`;
}