(function(){

    const images = [...document.querySelectorAll('.image-grid')]

    const imgLines = [];
    images.forEach((el, i) => {
        const l = Math.floor(i/3);
        imgLines[l] = imgLines[l] || [];
        imgLines[l].push(el)
    })

    function rotateImagesLines(i) {
        imgLines.forEach((line, l) => line.forEach(el => el.style.display = l>=i-1&&l<=i+1 ? 'block' : 'none'))
    }
    let i=1; setInterval(_ => { i = i>=imgLines.length-1 ? 1 : i+1; rotateImagesLines(i) }, 10 * 1000); rotateImagesLines(i++)

    /**********************/

    const testimonials = [...document.querySelectorAll('.testimonial')]
    function rotateTestimonials(t) {
        testimonials.forEach(el => el.style.display = 'none')
        testimonials[t].style.display = 'block'
    }
    let t=0; setInterval(_ => rotateTestimonials(t = (t+1) % testimonials.length), 10*1000);rotateTestimonials(t)
})()
