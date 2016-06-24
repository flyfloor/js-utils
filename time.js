const formatMsecs = (msecs, options = {}) => {
    /*
    simple ? '... 7:2:2' : '... 07:02:02'
    moment => '12:23'
    full ? '2014-10-14 12:56:23': '10-14 12:56:23'
    date => '2014-10-14'
    formater => '-'
    */
    options = options || {}
    let _date = new Date(parseInt(msecs)),
        _fill = options.simple ? '' : '0',
        _formater = options.formater || '-'

    let dateArr = [_date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getDate(), _date.getMonth() + 1, _date.getFullYear()]
    dateArr.map(item => item < 10 ? `${_fill}${item}` : item)

    let [_hour, _min, _sec, _day, _month, _year] = dateArr
    if (options.moment) {
        return `${_hour}:${_min}`
    }
    if (!options.full) {
        _year = undefined
    }
    let _moment = [_year, _month, _day].filter(i => i !== undefined).join(_formater)
    if (options.date) {
        return _moment
    }
    
    return options.full ? `${_moment} ${_hour}:${_min}:${_sec}` : `${_moment} ${_hour}:${_min}:${_sec}`
}

const timeAgo = (secs = 0) => {
    secs = parseInt(secs)
    let msecs = secs * 1000
    let t = Date.now() / 1000 - secs

    if (t / 172800 > 1) return formatMsecs(msecs, { full: t / 31536000 > 1 })
    if (new Date().getDate() - new Date(msecs).getDate() == 1) {
        return '昨天 ' + formatMsecs(msecs, { moment: true });
    }
    if (t / 3600 > 1) return formatMsecs(msecs, { moment: true });
    if (t / 60 > 1) return Math.floor(t / 60) + '分钟前';
    if (t > 10) return Math.floor(t) + '秒前';
    return '刚刚';
}

