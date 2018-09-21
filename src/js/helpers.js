numeral.register('locale', 'pwyf', {
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: 'thousand',
    million: 'million',
    billion: 'billion',
    trillion: 'trillion'
  },
  ordinal: function () {
    return ''
  },
  currency: {
    symbol: ''
  }
})
numeral.locale('pwyf')

var getOrgName = function ($org, version) {
  var $names
  if (version[0] === '2') {
    $names = $('name narrative', $org)
  } else {
    $names = $('name', $org)
  }
  return $($names[0]).text()
}
