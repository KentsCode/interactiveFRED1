function solarPanelActive () {

    var element = document.getElementById('solar-panel');

    if (element.classList.contains('solar-panel-active')) {
        element.classList.remove('solar-panel-active')
        element.classList.add('solar-panel-inactive');
    } else {
        element.classList.remove('solar-panel-inactive')
        element.classList.add('solar-panel-active');
    }
}