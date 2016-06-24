const paginateMixin = {
    _limit: 9,
    getInitialState() {
        return {
            fetching: false,
            finished: false
        }
    },
    paginate(cb){
        this.setState({
            fetching: true
        }, () => {
            let _limit = this.limit || this._limit
            let {page} = this.props.location.query
            page = page ? page : 1
            let skip = (parseInt(page) - 1) * _limit
            cb({skip, limit: _limit}).then(data => {
                this.setState({
                    fetching: false,
                    finished: data.length < _limit
                })
            })
        })
    }
}

export default paginateMixin