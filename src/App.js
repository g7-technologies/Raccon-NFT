import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbarCustom">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="assets/images/logo.png" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#Story" onClick={e => {
                  let Story = document.getElementById("Story");
                  e.preventDefault();
                  Story && Story.scrollIntoView({ behavior: "smooth", block: "start"});
                  }}>
                  Story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Goal" onClick={e => {
                  let Goal = document.getElementById("Goal");
                  e.preventDefault();
                  Goal && Goal.scrollIntoView({ behavior: "smooth", block: "start"});
                  }}>
                  Goal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Roadmap" onClick={e => {
                  let Roadmap = document.getElementById("Roadmap");
                  e.preventDefault();
                  Roadmap && Roadmap.scrollIntoView({ behavior: "smooth", block: "start"});
                  }}>
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Team" onClick={e => {
                  let Team = document.getElementById("Team");
                  e.preventDefault();
                  Team && Team.scrollIntoView({ behavior: "smooth", block: "start"});
                  }}>
                  Our Team
                </a>
              </li>
              <li className="nav-item p-0">
                <a className="nav-link" href="#" target="blank">
                  <img src="assets/images/ic_insta.png" />
                </a>
              </li>
              <li className="nav-item p-0">
                <a className="nav-link" href="https://twitter.com/RacCons_NFT" target="blank">
                  <img src="assets/images/ic_twitter.png" />
                </a>
              </li>
              <li className="nav-item btnHeader">
                <a className="btn btnWhite" href="https://discord.gg/racconsnft" target="blank">
                  Join Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="homePart1" id="Story">
        <div className="container">
          <div className="row">
            <div className="w-100 homePart1Align">
              <div className="col-12 col-md-12 col-lg-6">
                <h1>Greetings</h1>
                <hr />
                <p>
                  Throughout the ages, the Racoons have been kept in captivity
                  in a world governed by the ferocious K9’s .According to
                  legend, RacZeus is said to be the first and only known raccoon
                  to break out of prison. He was never seen or heard from again.
                  He Vanished. For years, rumours of his legends echoed through
                  the prison cells, inspiring hopes that he may one day return
                  to save us all! All hope is rekindled when one day, one of the
                  RacCons stumbles upon a note in his cell….
                </p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 text-center mt-5">
                <h2>Minting Time Will Start Soon</h2>
                <a className="btn btnYellow mt-3" href="https://discord.gg/racconsnft" target="blank">
                  Join Discord Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homePart2" id="Goal">
        <div className="container">
          <div className="row">
            <div className="w-100 homePart1Align">
              <div className="col-12 col-md-12 col-lg-6 offset-lg-5">
                <h1>Goal</h1>
                <hr />
                <p>
                  As a team, we seek to foster an environment in which the
                  participants feel at home. To ensure that the community is
                  appealing to its members, we invite suggestions and feedback
                  from them for every step of the project. Ultimately, we hope
                  to be able to take all of our members into the metaverse and
                  to the moon!
                  <br/>
                  We have tried to create a community where the most active
                  members are rewarded for believing in the project. We hope to
                  bring the most value to the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homePart3" id="Roadmap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mt-5 mb-5">Road Map</h1>
              <div className="timeline">
                <div className="timeline__component">
                  <div className="timeline__date timeline__date--right">
                    Q1-Q2 2022
                  </div>
                </div>
                <div className="timeline__middle">
                  <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                  <p>
                    All 5555 NFTs will be minted (DATE TBA).<hr/>All minted racoons
                    will immediately begin generating tokens but will not be
                    available for usage until 100% of the NFTs have been minted.
                  </p>
                  <p>
                    20%<hr/>Ten individuals who have purchased and held NFTs will be
                    randomly selected to receive an airdrop containing the
                    prophecy holding the next chapter of the story. The
                    community is responsible for piecing together the story.
                    Collection listing on RaritySniper.
                  </p>
                  <p>
                    40%<hr/>5ETH giveaway to twenty of our most active members who
                    own three NFTs.
                  </p>
                  <p>
                    60%<hr/>Holders of five or more RacConz will be entered into a
                    drawing to win a free NFT valued at 3ETH on the market. (The
                    winner selects). A competition of photographs and artwork
                    will be initiated. Two lucky winners of the competition will
                    be chosen to receive 1ETH each.
                  </p>
                  <p>
                    80%<hr/>The community will determine which firearms will be
                    smuggled into the prison in order to arm the RacConz. The
                    floor will be swept weekly, and RacCons will be distributed
                    to members of the community for free.
                  </p>
                  <p>
                    100%<hr/>All Combat/IQ and weapon upgrades will become
                    available. Custom shirts will be made and distributed to our
                    top 100 members. The team will investigate the possibility
                    of developing the RacConz P2E game. 2.5 percent of all
                    secondary market revenues will be utilised to sweep the
                    floor and distribute prizes in the discord community.
                  </p>
                </div>

                <div className="timeline__component timeline__component--bg">
                  <p className="second">
                    An announcement regarding a new initiative will be made.
                    Original minters will be recorded, and top active discord
                    minters will be able to mint at a discounted rate. Exciting
                    elements that incorporate both projects are yet to be
                    determined.
                  </p>
                </div>

                <div className="timeline__middle">
                  <div className="timeline__point"></div>
                </div>
                <div className="timeline__component">
                  <div className="timeline__date dateed">Q3-Q4 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homePart4" id="Team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mt-5 mb-3">Our Team</h1>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="charMain">
                    <img src="assets/images/char1.png" className="img-fluid" />
                    <div className="charDetails">
                      <p>
                        The NFT world is not new to him, Witnessing people
                        getting rug pulled he has decided to launch RacCons to
                        bring hope back to the community.
                      </p>
                    </div>
                  </div>
                  <h4>
                    @xTezza
                    <br />
                    Founder
                    <br />
                  </h4>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                  <div className="charMain">
                    <img src="assets/images/char2.png" className="img-fluid" />
                    <div className="charDetails">
                      <p>
                        Being a manager in the real world, and a big story
                        writer, he is the brain behind managing the community
                        and writing the story.
                      </p>
                    </div>
                  </div>
                  <h4>
                    @Soldier4One
                    <br />
                    Community Manager/
                    <br />
                    Story writer
                  </h4>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                  <div className="charMain">
                    <img src="assets/images/char3.png" className="img-fluid" />
                    <div className="charDetails">
                      <p>
                        The NFT world is not new to him, Witnessing people
                        getting rug pulled he has decided to launch RacCons to
                        bring hope back to the community.
                      </p>
                    </div>
                  </div>
                  <h4>
                    @Warden Bigrac
                    <br />
                    Community Manager
                    <br />
                  </h4>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-4">
                  <div className="charMain">
                    <img src="assets/images/char1.png" className="img-fluid" />
                    <div className="charDetails">
                      <p>
                        With his own developing team behind him, and years of coding experience, he has moved his team to focus solely on blockchain development!
                      </p>
                    </div>
                  </div>
                  <h4>
                    @Fighter_x
                    <br />
                    Developer
                    <br />
                  </h4>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                  <div className="charMain">
                    <img src="assets/images/char2.png" className="img-fluid" />
                    <div className="charDetails">
                      <p>
                        With over 12 year of experience designing, he mastered the art of 2D and moved to 3D art 8 years ago, since then he has only focused on 3D artwork and hopes to be designing in the Metaverse!  
                      </p>
                    </div>
                  </div>
                  <h4>
                    Alessio Maiolo
                    <br />
                    Graphic designer
                    <br />
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="footerPart">
              <div className="col-12 col-md-auto">
                <img src="assets/images/logo.png" className="footerLogo" />
              </div>
              <div className="col-12 col-md-auto footerLink">
                <ul className="fotter_nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#Story" onClick={e => {
                      let Story = document.getElementById("Story");
                      e.preventDefault();
                      Story && Story.scrollIntoView({ behavior: "smooth", block: "start"});
                      }}>
                      Story
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Goal" onClick={e => {
                      let Goal = document.getElementById("Goal");
                      e.preventDefault();
                      Goal && Goal.scrollIntoView({ behavior: "smooth", block: "start"});
                      }}>
                      Goal
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Roadmap" onClick={e => {
                      let Roadmap = document.getElementById("Roadmap");
                      e.preventDefault();
                      Roadmap && Roadmap.scrollIntoView({ behavior: "smooth", block: "start"});
                      }}>
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Team" onClick={e => {
                      let Team = document.getElementById("Team");
                      e.preventDefault();
                      Team && Team.scrollIntoView({ behavior: "smooth", block: "start"});
                      }}>
                      Our Team
                    </a>
                  </li>
                  <li className="nav-item p-0">
                    <a className="nav-link" href="#">
                      <img src="assets/images/ic_insta.png" />
                    </a>
                  </li>
                  <li className="nav-item p-0">
                    <a className="nav-link" href="https://twitter.com/RacCons_NFT" target="blank">
                      <img src="assets/images/ic_twitter.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
