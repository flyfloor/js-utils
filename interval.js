const IntervalMixin = {
    componentWillMount() {
        this.intervals = []
    },

    setInterval(){
        this.intervals.push(setInterval.apply(null, arguments))
    },

    clear(){
        this.intervals.map(clearInterval)
    },

    componentWillUnmount() {
        this.clear()
    },
}

module.exports = IntervalMixin