<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta name="description" content="A mapping application for NC State University.">
    <meta name="author" content="NC State University">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <title>NC State Campus Maps</title>

    <link rel="stylesheet" href="/css/app.min.css">
</head>
<body v-cloak>
    <app></app>

    <script src="/js/app.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4GqSEilXYH_gcKbWXomC4r01Y4O2tgq4&callback=app.init" async defer></script>
</body>
</html>