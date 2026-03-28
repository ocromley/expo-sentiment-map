document.getElementById('reset-btn').onclick = () => {
    moodChart.data.datasets[0].data = [0, 0, 0];
    moodChart.update();
    status.innerText = "Map Reset! Ready for next visitor.";
};
