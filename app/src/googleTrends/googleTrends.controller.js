import Boom from "boom"
import GoogleTrendService from "../../services/googleTrends/googleTrends.service"
import HttpsProxyAgent from "https-proxy-agent"
import _ from "loadash"
export default class GoogleTrendsController {
  static async GetIntrestByRegion(ctx, next) {
    const {
      request: {
        body: { searchValues, startDate, endDate, region, category },
      },
    } = ctx

    if (!searchValues) throw Boom.notFound("Search values required")
    if (!startDate) throw Boom.notFound("Start date required")
    if (!endDate) throw Boom.notFound("End date required")
    if (!region) throw Boom.notFound("Region required")
    if (category == undefined) throw Boom.notFound("Category required")
    let params = searchValues
    let grossData = []
    let result = []
    for (let i = 0; i < params.length; i += 5) {
      let proxyAgent = new HttpsProxyAgent(
        "https://lum-customer-hl_6f3a1d08-zone-static-country-gb:rmpegpso2r78@zproxy.lum-superproxy.io:22225"
      )
      const chunk = params.slice(i, i + 5)
      result = await GoogleTrendService.getIntrestByRegion(
        chunk,
        startDate,
        endDate,
        region,
        category,
        proxyAgent
      )
      grossData.push(result)
    }
    let groupedData = []
    let initialData = [].concat.apply([], grossData)
    for (let z = 0; z < initialData.length; z++) {
      let index = groupedData.findIndex((x) => x.name == initialData[z].name)
      if (index === -1) {
        groupedData.push(initialData[z])
      } else {
        groupedData
          .find((x) => x.name === initialData[z].name)
          .data.push(...initialData[z].data)
      }
    }

    let grossData1 = []
    let result1 = []
    for (let i = 0; i < params.length; i += 5) {
      let proxyAgent = new HttpsProxyAgent(
        "https://lum-customer-hl_6f3a1d08-zone-static-country-gb:rmpegpso2r78@zproxy.lum-superproxy.io:22225"
      )
      const chunk = params.slice(i, i + 5)
      result1 = await GoogleTrendService.getIntrestOverTime(
        chunk,
        startDate,
        endDate,
        region,
        category,
        proxyAgent
      )
      grossData1.push(result1)
    }
    let groupedData1 = []
    let initialData1 = [].concat.apply([], grossData1)

    for (let z = 0; z < initialData1.length; z++) {
      let index = groupedData1.findIndex((x) => x.date == initialData1[z].date)
      if (index === -1) {
        groupedData1.push(initialData1[z])
      } else {
        groupedData1
          .find((x) => x.date === initialData1[z].date)
          .value.push(...initialData1[z].value)
      }
    }

    let sortedData = groupedData1.reduce((acc, item, index) => {
      acc.push({
        name: params[index],
        data: groupedData1.map((data) => [data.date, data.value[index]]),
      })
      return acc
    }, [])
    sortedData = sortedData.filter((data) => data.name)
    ctx.body = { groupedData, sortedData }
    await next()
  }
}
