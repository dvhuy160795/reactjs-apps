<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <!--    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
        name="description"
        content="Web site created using create-react-app"
    />

    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->

    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link rel="stylesheet" href="/asset/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{mix('/css/management/app.css')}}">
    <title>App Name - @yield('title')</title>
</head>
<body>
@section('sidebar')
  <nav class="navbar navbar-expand-lg" id="navbar-management">
      <a class="navbar-brand" href="#">Dashboard</a>
      <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                  <a class="nav-link" href="#">Analytic <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Setting</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Addon</a>
              </li>
              <li class="nav-item">
                  <form class="form-inline my-2 my-lg-0 ml-4">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-primary|secondary|success|danger|warning|info|light|dark my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </li>
          </ul>
      </div>
  </nav>
  <nav class="navbar navbar-expand-lg shadow-sm bg-white rounded">
    <div class="collapse navbar-collapse " >
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Analytic <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Setting</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Addon</a>
            </li>
        </ul>
    </div>
  </nav>
@show

@yield('content')

<noscript>You need to enable JavaScript to run this app.</noscript>
<script src="/asset/js/jquery.min.js"></script>
<script src="/asset/js/popper.min.js"></script>
<script src="/asset/js/boostrap.min.js"></script>
</body>
</html>
