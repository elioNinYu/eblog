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
    "revision": "e3b1aea47d6965491200b04e150a0cd6"
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
    "url": "assets/js/11.5ab033a8.js",
    "revision": "e70c7ae8e8e31bf041804ecaa3c190ef"
  },
  {
    "url": "assets/js/12.ae37b909.js",
    "revision": "45aec8846b3f5df959823989a8190579"
  },
  {
    "url": "assets/js/13.e9c73d16.js",
    "revision": "97928379684a1bf460646c6a28e93af6"
  },
  {
    "url": "assets/js/14.dec4ab28.js",
    "revision": "7ae45b866a4a67c729709e61b9402fe6"
  },
  {
    "url": "assets/js/15.8dfc64c7.js",
    "revision": "bf39896b66e6f2209c88e61c9709abcf"
  },
  {
    "url": "assets/js/16.50ec4fa9.js",
    "revision": "8420a925c08e6d2760469821f2bd7451"
  },
  {
    "url": "assets/js/17.095385f2.js",
    "revision": "ed2396d3eac954b120e9d3e5b2ba6d1e"
  },
  {
    "url": "assets/js/18.85ec79f7.js",
    "revision": "549cdf4ce5a567c2523d70e00137f177"
  },
  {
    "url": "assets/js/19.8ec304ad.js",
    "revision": "242ad2bc58a173d8e665e780bc1ddff5"
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
    "url": "assets/js/8.674dd5d3.js",
    "revision": "d7bc153ee329477e144a548e856ba5b2"
  },
  {
    "url": "assets/js/9.7408b70b.js",
    "revision": "f4fbd046e315404ff718b7cf88f28d9a"
  },
  {
    "url": "assets/js/app.aa616e89.js",
    "revision": "cde0f4c8b6ce76e0edbbece5b93132e8"
  },
  {
    "url": "blogLogo.png",
    "revision": "3bcdcb6da70cc45842f71e6af683c7df"
  },
  {
    "url": "blogs/javascript/js-async/001.html",
    "revision": "d9d85beedaff1d385ab77bd455d31612"
  },
  {
    "url": "blogs/javascript/js-ecma/001.html",
    "revision": "a9dc47927daec37f760806e23cc03680"
  },
  {
    "url": "blogs/learning/2020-2021/001.html",
    "revision": "b5c18f3d7a962e01a9214b22c1496482"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "7d3bc6fc1f858fc1bb3395a1008512c3"
  },
  {
    "url": "categories/index.html",
    "revision": "5b9a830e25c82df7a9a73022fa6f8b30"
  },
  {
    "url": "categories/javascript/index.html",
    "revision": "17a2a0628a493ccba3dcadf6bc8eb847"
  },
  {
    "url": "categories/learning/index.html",
    "revision": "f9aa1c471cd24efabc97cc4f8c3e54b1"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "c3eea78d7ea9bcc903d34fa6b201590d"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "0fce906dc77243731ea2f940ef57ee99"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "b38713dee844727313be4ce74a2ec0a0"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "685fefaea8732231f89e133f66770d8a"
  },
  {
    "url": "greeny.jpg",
    "revision": "c6be85aaaeee2b893976c967c024cc34"
  },
  {
    "url": "index.html",
    "revision": "fb0fc2f10ae0b9cb3910a6a57000d00c"
  },
  {
    "url": "tag/index.html",
    "revision": "243f07388590d31eb6d59eb030abe94f"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "79318f74481e5ebfb2d4ba8aa12eead8"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f588597bba8e9d432359be151ade316"
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
