/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "656a19c9effd49ac13e008997b6cce55"
  },
  {
    "url": "assets/css/0.styles.091eb25a.css",
    "revision": "d9152219d1e81d3172958dc95f56149c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.43a6d07e.js",
    "revision": "bef21f6c17bc4813b7a170de75861815"
  },
  {
    "url": "assets/js/10.6bb00102.js",
    "revision": "133193a45e207f3912ce953c386cb358"
  },
  {
    "url": "assets/js/11.ed51ad20.js",
    "revision": "0750897e269b22bb76fbfbf0dc317032"
  },
  {
    "url": "assets/js/12.775aa660.js",
    "revision": "0e5f855ea130ee77109146864f6278eb"
  },
  {
    "url": "assets/js/13.a87cf3f2.js",
    "revision": "7812f2d3e69fb58a1e381c3c44dbdc0b"
  },
  {
    "url": "assets/js/14.c998ebe1.js",
    "revision": "1b0f0c55d9cc4e2ce8730d0b1ff5e4f9"
  },
  {
    "url": "assets/js/15.81e0d012.js",
    "revision": "c96624b2c816754522246f53ddab08da"
  },
  {
    "url": "assets/js/16.acd18333.js",
    "revision": "2853e6cdaaeb6db9598ef9099d37b1ae"
  },
  {
    "url": "assets/js/17.26e91af7.js",
    "revision": "2d09ac8d8c86cfef742580d908bdb41a"
  },
  {
    "url": "assets/js/18.116bb840.js",
    "revision": "052e2ef98392d3cf25c77a2d8579748b"
  },
  {
    "url": "assets/js/19.cd2df434.js",
    "revision": "5ee9bdda10cd0fe1d959388ae4dda589"
  },
  {
    "url": "assets/js/20.7bbac09a.js",
    "revision": "a2b2db688b48aeb481c583f31d8b861c"
  },
  {
    "url": "assets/js/21.26ca95f6.js",
    "revision": "e187adbfeaf8370bd174966172947bbe"
  },
  {
    "url": "assets/js/3.3d1dc3cd.js",
    "revision": "419c707c6493948eeef262beceebd874"
  },
  {
    "url": "assets/js/4.84af16b9.js",
    "revision": "c60a0a5d27e1992e9c1bdb23886eb0eb"
  },
  {
    "url": "assets/js/5.56966719.js",
    "revision": "02ba07c75a84aa6145776eea53f69ef1"
  },
  {
    "url": "assets/js/6.c67ec73f.js",
    "revision": "daa1b072cafbf9222e9a5bf46987934c"
  },
  {
    "url": "assets/js/7.df4b4b9b.js",
    "revision": "efc73350b82bd3d40d82f81a25765d28"
  },
  {
    "url": "assets/js/8.2db85c3c.js",
    "revision": "b014539280e9fb90c83438447d5c96b5"
  },
  {
    "url": "assets/js/9.7408b70b.js",
    "revision": "f4fbd046e315404ff718b7cf88f28d9a"
  },
  {
    "url": "assets/js/app.854545af.js",
    "revision": "fe32859cfb84603b0685feb681c9a2f7"
  },
  {
    "url": "blogLogo.png",
    "revision": "3bcdcb6da70cc45842f71e6af683c7df"
  },
  {
    "url": "blogs/计算机网络/shakeAndwave/001.html",
    "revision": "d28e4c8ce6c87edc53179ba4d4b248c8"
  },
  {
    "url": "blogs/javascript/js-bibao/001.html",
    "revision": "6d3edc48235b0c80f5c278aca9cf88eb"
  },
  {
    "url": "blogs/javascript/js-ecma/001.html",
    "revision": "3041e1d7bcae9dbfd837e4db464ac88b"
  },
  {
    "url": "blogs/javascript/js-promise/001.html",
    "revision": "282883edd58b65323c2baae27cf7c915"
  },
  {
    "url": "blogs/learning/2020-2021/001.html",
    "revision": "7e669cb8f6e366d0af48c92acbdc3063"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "2cdecd1fb6fff46ff7dbf37b82307315"
  },
  {
    "url": "categories/计算机网络/index.html",
    "revision": "c87cd88f2cbde5b0aa3b40d2058c83a7"
  },
  {
    "url": "categories/index.html",
    "revision": "32219f879a853806d27a54bdf986a636"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "15fa83d98a5f0aada164751094cca243"
  },
  {
    "url": "categories/learning/index.html",
    "revision": "43a4e051c8f70181568240e942508d61"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "7f0bcb12faa0ad00f68ddddd976b023b"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "b367ac214eb434e4da3f75980d026584"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "37c2bf6bb9fbf68e945dcb4280ca546b"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "05ea406f261123507c8fdefd10949dfb"
  },
  {
    "url": "greeny.jpg",
    "revision": "c6be85aaaeee2b893976c967c024cc34"
  },
  {
    "url": "index.html",
    "revision": "ce1da446ab3819cc8f8e02a4220e71e3"
  },
  {
    "url": "tag/async/index.html",
    "revision": "14201453d6cdaaae699fd659e0fe84d9"
  },
  {
    "url": "tag/http/index.html",
    "revision": "1084acf24be21f43cf971f3b38167bda"
  },
  {
    "url": "tag/index.html",
    "revision": "a86b47d44dede5b43919bb34033605d8"
  },
  {
    "url": "tag/js-api/index.html",
    "revision": "ebf7e7c66b34f8ceed6193d05d6fd660"
  },
  {
    "url": "tag/learning/index.html",
    "revision": "5824edb9bbfc8507fae11659846c0859"
  },
  {
    "url": "timeline/index.html",
    "revision": "40f7b59e2c8221391359a03a8076e002"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
