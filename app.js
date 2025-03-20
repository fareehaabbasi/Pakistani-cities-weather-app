function num() {
    let temperature = prompt("Enter the name of a Pakistani city to know the weather:");

    let h2 = "";
    let message = "";
    let bgimg = "";

    if (temperature.toLowerCase() === "karachi") {
        h2 = "🌤️Karachi:";
        message = "The weather is hot and humid at 32°C.";
        bgimg = "images/karachi.jpg";
    } else if (temperature.toLowerCase() === "islamabad") {
        h2 = "⛅Islamabad:";
        message = "The weather is cool and cloudy at 20°C.";
        bgimg = "images/islamabad.jpg";
    } else if (temperature.toLowerCase() === "lahore") {
        h2 = "❄️ Lahore:";
        message = "It's cold and windy at 10°C.";
        bgimg = "images/lahore.jpg";
    } else if (temperature.toLowerCase() === "quetta") {
        h2 = "🌡️Quetta:";
        message = "It's extremely hot at 40°C!";
        bgimg = "images/quetta.jpg";
    } else if (temperature.toLowerCase() === "multan") {
        h2 = "🌞 Multan:";
        message = "It's very hot and dry at 38°C!";
        bgimg = "images/multan.jpg";
    } else if (temperature.toLowerCase() === "hyderabad") {
        h2 = "☀️Hyderabad:";
        message = "It’s sunny and warm at 36°C.";
        bgimg = "images/hyderabad.jpg";
    } else if (temperature.toLowerCase() === "sukkur") {
        h2 = "🌧️Sukkur:";
        message = "It's cloudy with chances of rain at 28°C.";
        bgimg = "images/sukkur.jpg";
    } else if (temperature.toLowerCase() === "faisalabad") {
        h2 = "☁️Faisalabad:";
        message = "It’s partly cloudy at 30°C.";
        bgimg = "images/faisalabad.jpg";
    } else if (temperature.toLowerCase() === "gilgit") {
        h2 = "🌄Gilgit:";
        message = "It’s cool and clear at 15°C.";
        bgimg = "images/gilgit.jpg";
    } else if (temperature.toLowerCase() === "peshawar") {
        h2 = "🌡️Peshawar: ";
        message = "It’s extremely hot at 40°C!";
        bgimg = "images/peshawar.jpg";
    } else {
        message = "❓ Sorry, weather data for this city is not available.";
    }

    document.write(`
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">

        <div class="container d-flex align-items-center flex-column justify-content-center" style="height: 100vh;>
            <div class="row justify-content-center">
                <div class="col-md-6">
                   <h1 class=" text-center">CITIES WEATHER CHECKER</h1>
                    <div class="weather-card" style="
                        background-image: url('${bgimg}');
                        background-size: cover ;
                        background-position: center;
                        color: white;
                        min-height: 400px;
                        height: auto;
                        border-radius: 13px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        position: relative;
                        overflow: hidden;">
                        <div class="overlay p-3" style="position: absolute;
                            background-color: rgba(0, 0, 0, 0.5);
                            top: 0;
                            bottom: 0;
                            right: 0;
                            left:0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 12px;">

                            <div>
                                <h2 class="font-weight-bold">${h2}</h2>
                                <p class="lead">${message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg" style="
            position: fixed;
            bottom: 0;
            width: 100%;
            z-index: 1000;
        ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="color:white; font-size:30px;">Pakistan Cities</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse";"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
         aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0" style="margin-left: 5vw">
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">Karachi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">islamabad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">lahore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">quetta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">multan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">hyderabad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">sukkur</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">faisalabad</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">gilgit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-light px-4 text-uppercase" aria-current="page" href="#">peshawar</a>
        </li>
        <a href=""><button class="btn btn-light" style="margin-left: 7vw;">Check Another Weather</button></a>

    </div>
  </div>
</nav>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>

`);
}

num();
