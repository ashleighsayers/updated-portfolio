console.log("home js working")

let root = document.querySelector("#root");

const home = `
    <nav>
        <div class="nav"> 
            <div class="nav-content"> 
                <img class="nav-logo " src="images/white logo.svg"/> 
            </div>
            
            <div class="nav-content"> </div>
            <div class="nav-content nav-links">
                <ul>
                    <li>Resume</li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <div class="hero-image">
            <img class="hero-img" src="images/Untitled-2.jpg"/>
            <div class="hero-content"></div>
        </div>

        <div class="info"></div>
    </main>
`;

document.body.innerHTML = home;
