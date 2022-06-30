const appearList = document.querySelectorAll('.appear');

const cb = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        }
    });
}
const io = new IntersectionObserver(cb);
for (let i=0;i<appearList.length;i++) {
    io.observe(appearList[i]);
}