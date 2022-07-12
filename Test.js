const data = {
  finalData: [
    {
      date: "Feb 1, 2017",
      value: [18, 11, 8, 57, 7, 50],
    },
    {
      date: "Feb 2, 2017",
      value: [17, 11, 7, 61, 7, 52],
    },
    {
      date: "Feb 3, 2017",
      value: [20, 15, 8, 69, 8, 53],
    },
    {
      date: "Feb 4, 2017",
      value: [24, 21, 13, 93, 8, 63],
    },
    {
      date: "Feb 5, 2017",
      value: [23, 21, 12, 100, 9, 72],
    },
    {
      date: "Feb 6, 2017",
      value: [14, 10, 6, 59, 6, 100],
    },
  ],
}
const keyWords = ["Whiskey", "Vodka", "Rum", "Beer", "Gin", "Coke"]
const result = data.finalData.reduce((acc, item, index) => {
  acc.push({
    name: keyWords[index],
    data: data.finalData.map((data) => [data.date, data.value[index]]),
  })
  return acc
}, [])

// let result = data.finalData.map((item, index) => {
//   return {
//     name: keyWords[index],
//     data: item.value.map((i) => [i[index]]),
//   }
// })
console.log(result[1])
