window.onload = function () {
    console.log('Page loaded!');
    addTabIndexToFigures();
};

function addTabIndexToFigures() {
    let figures = document.querySelectorAll('figure');
    figures.forEach(function (figure, index) {
        figure.setAttribute('tabindex', '0'); // Add tabindex to each figure
    });
};

// Mouse events
document.querySelectorAll('figure').forEach(function (figure) {
    figure.addEventListener('mouseover', function () {
        figure.style.transform = "scale(1.1)";
        console.log('Mouse over figure');
    });
    figure.addEventListener('mouseleave', function () {
        figure.style.transform = "scale(1)";
        console.log('Mouse leave figure');
    });
});

// Keyboard events (focus and blur)
document.querySelectorAll('figure').forEach(function (figure) {
    figure.addEventListener('focus', function () {
        figure.style.border = "3px solid blue";
        console.log('Focus on figure');
    });
    figure.addEventListener('blur', function () {
        figure.style.border = "none";
        console.log('Blur on figure');
    });
});
