
function calculateAverage() {
    const gradeElements = document.querySelectorAll('.grade');
    let total = 0;
    let count = gradeElements.length;
    gradeElements.forEach(function(element) {
        total += parseFloat(element.value);
    });
    let average = total / count;
    document.getElementById("result").innerText = "Average Grade: " + average.toFixed(2);
}