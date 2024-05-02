// Initialize matrices
let matrix1 = [];
let matrix2 = [];

// Function to get matrix size from user input
function getMatrixSize() {
    // Get rows and columns for both matrices from user input
    const rows1 = parseInt(document.getElementById('rows1').value);
    const cols1 = parseInt(document.getElementById('cols1').value);
    const rows2 = parseInt(document.getElementById('rows2').value);
    const cols2 = parseInt(document.getElementById('cols2').value);

    // Check if the number of columns in Matrix 1 is equal to the number of rows in Matrix 2
    if (cols1 !== rows2) {
        alert("Number of columns in Matrix 1 should be equal to the number of rows in Matrix 2 for multiplication.");
        return;
    }

    // Display inputs for both matrices and a button to multiply them
    document.getElementById('matrixInputs').innerHTML = createMatrixInputs(rows1, cols1, 1) + createMatrixInputs(rows2, cols2, 2) + "<button onclick='multiply()'>Multiply</button>";
}

// Function to create input fields for matrix values
function createMatrixInputs(rows, cols, matrix) {
    let html = `<h2>Matrix ${matrix}:</h2><table>`;
    for (let i = 0; i < rows; i++) {
        html += "<tr>";
        for (let j = 0; j < cols; j++) {
            html += `<td><input type='number' id='${matrix}_${i}_${j}'></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    return html;
}

// Function to multiply the matrices
function multiply() {
    // Get matrix values from input fields
    const rows1 = parseInt(document.getElementById('rows1').value);
    const cols1 = parseInt(document.getElementById('cols1').value);
    const rows2 = parseInt(document.getElementById('rows2').value);
    const cols2 = parseInt(document.getElementById('cols2').value);

    // Check if the number of columns in Matrix 1 is equal to the number of rows in Matrix 2
    if (cols1 !== rows2) {
        alert("Number of columns in Matrix 1 should be equal to the number of rows in Matrix 2 for multiplication.");
        return;
    }

    // Get values of both matrices
    matrix1 = getMatrixValues(rows1, cols1, 1);
    matrix2 = getMatrixValues(rows2, cols2, 2);

    // Perform matrix multiplication
    performMultiplication(matrix1, matrix2);
}

// Function to get matrix values from input fields
function getMatrixValues(rows, cols, matrix) {
    const matrixValues = [];
    for (let i = 0; i < rows; i++) {
        matrixValues[i] = [];
        for (let j = 0; j < cols; j++) {
            matrixValues[i][j] = parseFloat(document.getElementById(`${matrix}_${i}_${j}`).value);
        }
    }
    return matrixValues;
}

// Function to perform matrix multiplication
function performMultiplication(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    const result = [];

    // Perform multiplication
    for (let i = 0; i < rows1; i++) {
        result[i] = [];
        for (let j = 0; j < cols2; j++) {
            let sum = 0;
            for (let k = 0; k < cols1; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    // Display result
    displayResult(result);
}

// Function to display the result
function displayResult(result) {
    let output = "<h2>Result:</h2>";
    output += "<p>Result = Matrix 1 * Matrix 2 </p><pre style='font-size: 20px;'>[";
    for (let i = 0; i < result.length; i++) {
        if (i > 0) {
            output += "<br>";
        }
        output += "[";
        for (let j = 0; j < result[i].length; j++) {
            output += "<span style='font-size: 20px;'>" + result[i][j] + "</span>";
            if (j !== result[i].length - 1) {
                output += ", ";
            }
        }
        output += "]";
    }
    output += "]</pre>";
    document.getElementById('result').innerHTML = output;
}

