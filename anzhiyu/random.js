var posts=["2024/10/20/入库说明/","2024/10/22/常用软件下载/","2024/10/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };