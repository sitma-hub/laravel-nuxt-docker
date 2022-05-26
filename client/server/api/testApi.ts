export default defineEventHandler(async (event) => {
  //   const config = useRuntimeConfig();
  //   const test: any = await $fetch("/api/products", {
  //     baseURL: process.server ? config.apiUrlServer : config.apiUrlBrowser,
  //   });
  //   const test: any = await $fetch("http://localhost:8000/api/products");
  //   const test: any = await $fetch(
  //     "https://api.coindesk.com/v1/bpi/currentprice.json"
  //   );
  //   event.res.write(await test.text());
  event.res.write("Hello API");
  event.res.statusCode = 200;
  event.res.end();
});
