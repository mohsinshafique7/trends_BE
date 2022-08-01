// import _debugger from "debug"
// import ErrorService from '../services/error.service';

// const error = _debugger('brand-nudge:error');
// module.exports = CatchErrors async (ctx, next) => {

// }

module.exports = CatchErrors = async (ctx, next) => {
  try {
    await next()
  } catch (e) {
    // await ErrorService.add({
    //   message: e.message,
    //   stack: JSON.stringify(e.stack)
    // });
    // error('Catched error: ', e);
    let payload = e
    if (e.isBoom) {
      payload = e.output.payload
      payload.data = e.data
    }
    ctx.status = payload.statusCode || payload.status || 500
    console.log(e)
    ctx.body = payload
  }
}
