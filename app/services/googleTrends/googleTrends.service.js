import googleTrends from "google-trends-api"

export default class GoogleTrendService {
  static async getIntrestByRegion(
    searchValues,
    startDate,
    endDate,
    region,
    category,
    proxyAgent
  ) {
    let result = await googleTrends.interestByRegion({
      keyword: searchValues,
      startTime: new Date(startDate),
      endTime: new Date(endDate),
      geo: region,
      resolution: "REGIONS",
      category: category,
      proxyAgent,
    })

    result = JSON.parse(result).default.geoMapData.reduce((ids, things) => {
      ids.push({
        name: things.geoName,
        data: searchValues.map((item, index) => {
          return {
            name: item,
            y: things.value[index],
            drilldown: things.geoCode,
            type: "column",
          }
        }),
      })
      return ids
    }, [])
    return result
  }
  static async getIntrestOverTime(
    searchValues,
    startDate,
    endDate,
    region,
    category,
    proxyAgent
  ) {
    try {
      let result = await googleTrends.interestOverTime({
        keyword: searchValues,
        startTime: new Date(startDate),
        endTime: new Date(endDate),
        geo: region,
        category: category,
        agent: proxyAgent,
        // resolution: "REGION",
      })
      result = JSON.parse(result).default.timelineData.map((item, index) => {
        return { date: item.formattedTime, value: item.value }
      })

      return result
    } catch (e) {
      console.log(e)
    }
  }
}
