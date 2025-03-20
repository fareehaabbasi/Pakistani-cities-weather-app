function num() {
    let temperature = prompt("Enter the name of a Pakistani city to know the weather:");

    let h2 = "";
    let message = "";
    let bgimg = "";

    if (temperature.toLowerCase() === "karachi") {
        h2 = "🌤️Karachi:";
        message =
          "Karachi is known for its hot and humid weather. The temperature today is around 32°C, making it a typical warm day in this bustling city. The coastal breeze often brings some relief, but the humidity can still make it feel warmer than it actually is.";
        bgimg = "images/karachi.jpg";
    } else if (temperature.toLowerCase() === "islamabad") {
        h2 = "⛅Islamabad:";
        message =
          " Islamabad, the capital city of Pakistan, is experiencing a cool and cloudy day with a temperature of 20°C. The pleasant weather makes it an ideal time to explore the scenic Margalla Hills and enjoy the city's natural beauty.";
        bgimg = "images/islamabad.jpg";
    } else if (temperature.toLowerCase() === "lahore") {
        h2 = "❄️ Lahore:";
        message =
          "Lahore is currently cold and windy with a temperature of 10°C. The chilly breeze sweeping through the historic city gives a cozy winter feel. The aroma of freshly made food from the street vendors makes it even more inviting.";
        bgimg = "images/lahore.jpg";
    } else if (temperature.toLowerCase() === "quetta") {
        h2 = "🌡️Quetta:";
        message =
          "Quetta is facing an extremely hot day at 40°C! The dry heat is intense, but the surrounding mountains provide a beautiful backdrop to this rugged city.";
        bgimg = "images/quetta.jpg";
    } else if (temperature.toLowerCase() === "multan") {
        h2 = "🌞 Multan:";
        message =
          "Multan is very hot and dry today with a temperature of 38°C. Known as the 'City of Saints,' the heat is typical for this historic city in Southern Punjab.";
        bgimg = "images/multan.jpg";
    } else if (temperature.toLowerCase() === "hyderabad") {
        h2 = "☀️Hyderabad:";
        message =
          "Hyderabad is sunny and warm at 36°C. The city’s vibrant culture and rich history make it an exciting place to visit, despite the heat.";
        bgimg = "images/hyderabad.jpg";
    } else if (temperature.toLowerCase() === "sukkur") {
        h2 = "🌧️Sukkur:";
        message =
          " Sukkur is cloudy with chances of rain at 28°C. The overcast sky provides some relief from the usual heat, and the possibility of rain adds a refreshing touch.";
        bgimg = "images/sukkur.jpg";
    } else if (temperature.toLowerCase() === "faisalabad") {
        h2 = "☁️Faisalabad:";
        message =
          "Faisalabad is experiencing partly cloudy weather at 30°C. The city's industrial activity continues despite the mixed weather conditions.";
        bgimg = "images/faisalabad.jpg";
    } else if (temperature.toLowerCase() === "gilgit") {
        h2 = "🌄Gilgit:";
        message =
          "Gilgit is cool and clear at 15°C. The crisp mountain air and breathtaking views of the surrounding peaks make it a perfect destination for nature lovers.";
        bgimg = "images/gilgit.jpg";
    } else if (temperature.toLowerCase() === "peshawar") {
        h2 = "🌡️Peshawar: ";
        message =
          "Peshawar is extremely hot at 40°C! The ancient city’s historic landmarks stand tall even in the sweltering heat.";
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
