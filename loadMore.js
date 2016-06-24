const LoadMore = {
    _limit: 12,
    getInitialState() {
        return {
            fetching: false,
            finished: false,
            page: 0
        }
    },
    loadMore(cb){
        this.setState({
            fetching: true
        }, () => {
            let {page} = this.state
            let _limit = this.limit || this._limit
            let skip = page * _limit
            cb({skip, limit: _limit}).then(data => {
                this.setState({
                    page: page + 1,
                    fetching: false,
                    finished: data.length < _limit
                })
            })
        })
    },

    initLoadMore(cb){
        this.setState({
            page: 0,
            finished: false,
        }, () => this.loadMore(cb))
    }
}

export default LoadMore