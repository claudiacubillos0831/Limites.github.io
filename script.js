function calculateLimit() {
    const func = document.getElementById('function').value;
    const point = parseFloat(document.getElementById('point').value);

    if (func && !isNaN(point)) {
        try {
            // Parsear la función
            const expr = math.parse(func);
            const code = expr.compile();

            // Definir un rango de valores cercanos al punto
            const epsilon = 1e-5;
            const values = [
                point - epsilon,
                point + epsilon
            ];

            // Evaluar la función en esos puntos
            const results = values.map(x => code.evaluate({ x }));

            // Promediar los resultados para aproximar el límite
            const limit = (results[0] + results[1]) / 2;
            const roundedLimit = Math.round(limit); // Redondear a número entero

            // Mostrar el resultado
            const result = `El límite de ${func} cuando x tiende a ${point} es aproximadamente: ${roundedLimit}`;
            document.getElementById('result').innerText = result;
            document.getElementById('result').style.display = 'block';
        } catch (error) {
            alert('Error al calcular el límite: ' + error.message);
        }
    } else {
        alert('Por favor, ingrese una función válida y un punto.');
    }
}
