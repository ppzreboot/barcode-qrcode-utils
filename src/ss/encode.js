import Barcode from 'jsbarcode'

export
const enctype_list = [
  // 'aztec',
  ['code_128', 'code128'],
  ['code_39', 'code39'],
  // 'code_93',
  ['codabar', 'codabar'],
  // 'databar',
  // 'databar_expanded',
  // 'data_matrix',
  // 'dx_film_edge',
  ['ean_13', 'ean13'],
  ['ean_8', 'ean8'],
  ['itf', 'itf'],
  // 'maxi_code',
  // 'micro_qr_code',
  // 'pdf417',
  // 'qr_code',
  // 'rm_qr_code',
  ['upc_a', 'upc'],
  // 'upc_a',
  // 'linear_codes',
  // 'matrix_codes',
]

export
function encode(format, content, svg) {
  try {
    console.log('encoding content: ', { format, content })
    Barcode(svg, content, { format: enctype_list[format][1] })
  } catch(err) {
    console.error(err)
    return 'error on encode data'
  }
}
