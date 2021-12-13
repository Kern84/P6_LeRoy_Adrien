class Carousel{

    /**
    * @param {HTMLElement} element
    * @param {object} options
    * @param {object} options.slidesToScroll Nombre d'éléments à faire défiler
    * @param {object} options.slidesVisible Nombre d'élément visible dans un slide
    */

    constructor (element, options = {}){
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1,
            loop: false
        }, options)
        let children = [].slice.call(element.children)
        this.isMobile = false
        this.currentItem = O
        this.moveCallbacks = []

        // Modification du DOM
        this.root = this.createDivWithClass('carousel')
        this.container = this.createDivWithClass('carousel_container')
        this.root.setAttribute('tabindex', '0')
        root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel_item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()

        // Evenements
        this.moveCallbacks.forEach(cb => cb(0))
        this.onWindowResize()
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.root.addEventListener('keyup', e => {
            if (e.key === 'ArrowRight' || e.key === 'Right') {
            this.next()
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.prev()
            }
        })
    }

    setStyle () {
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100 + "%")
        this.items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%")
    }

    createNavigation () {
        let nextButton = this.createDivWithClass('carousel_next')
        let prevButton = this.createDivWithClass('carousel_prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)
        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))
        if (this.options.loop === true) {
            return
        }
        this.onMove(index => {
            if (index === O) {
                prevButton.classList.add('carousel_prev-hidden')
            } else {
                prevButton.classList.remove('carousel_prev-hidden')
            }
            if (this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('carousel_next-hidden')
            } else {
                nextButton.classList.remove('carousel_next-hidden')
            }
        })
    }

    next () {
        this.gotoItem(this.currentItem + this.slidesToScroll)
    }

    prev () {
        this.gotoItem(this.currentItem - this.slidesToScroll)
    }

    gotoItem (index) {
    if (index < 0) {
        if (this.options.loop) {
            index = this.items.length - this.slidesVisible
        } else {
            return
        }
    } else if (index >= this.items.length || (this.items[this.currentItem + this.slidesVisible] === undefined && index >
     this.currentItem)) {
     if (this.options.loop) {
        index = 0
    } else {
        return
    }
    }
    let translateX = index * -100 / this.items.length
    this.container.style.transform = 'translated3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    onMove (cb) {
        this.moveCallbacks.push(cb)
    }

    onWindowResize () {
        let mobile = window.innerWidth < 800
        if (mobile !== this.isMobile) {
        this.isMobile = mobile
        this.setStyle()
        this.moveCallbacks.forEach(cb => cb(this.currentItem))
        }
    }

    createDivWithClass (className){
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
        }
    }

    get slidesToScroll () {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }

    get slidesVisible () {
        return this.isMobile ? 1 : this.options.slidesVisible
    }

    document.addEventListener('DOMContentLoaded', function(){
        new Carousel(document.querySelector('#carousel'),{
            slidesToScroll: 2,
            slidesVisible: 3,
            loop: true
        })
    })
