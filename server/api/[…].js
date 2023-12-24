export default defineEventHandler(() => {
    return {
      ok: true,
      data: {
        url: event.path
      },
      message: '/api 下不匹配的路由都會進入這裡'
    }
  })