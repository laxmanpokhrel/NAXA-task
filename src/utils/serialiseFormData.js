export default (formData, data) => {
    const keys = [...new Set(Object.keys(data))]
    keys.forEach(key => formData.append(key, data[key]))
    return formData
}