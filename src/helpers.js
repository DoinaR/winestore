export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item.fields[type])
  if (type === 'flavours') {
    unique = unique.flat()
  }
  if (type === 'brand') {
    return ['all', ...new Set(unique)]
  }

  return [...new Set(unique)]
}
