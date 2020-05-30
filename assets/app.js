let map; 
document.addEventListener('DOMContentLoaded', () => {
    let s = document.createElement('script');
    document.head.appendChild(s);
    s.addEventListener('load', () => {
        console.log('did you see me load?');
        s.src = `https://maps.googleapis.com/maps/apis/js?key=${APIKEY}`;
    });
})