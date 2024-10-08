import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Components/Cards";
import Btn from "./Components/Btn";
import { useEffect } from "react";
function App() {
  const [News, setNews] = useState([]);
  const [Page, setPage] = useState(1);
  const HandleFetch = async () => {
    try{
      const  response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=${Page}-09-20&sortBy=popularity&apiKey=2a8629dd57aa4be0aed6176f0814d02f`)
      const data  = await response.json(); // This is the real time fetching of data
      
    }catch(err){
      console.log(err);
    }
    const response = {
      status: "ok",
      totalResults: 37,
      articles: [
        {
          source: [Object],
          author: "Matt Hayes",
          title:
            "First and 10: Texas has an Arch Manning problem. Is he the quarterback or Quinn Ewers? - USA TODAY",
          description:
            "The delicious dilemma for No. 2 Texas: Quinn Ewers or Arch Manning? It's a blessing and a curse as Longhorns close in on their most-difficult games.",
          url: "https://www.usatoday.com/story/sports/ncaaf/2024/09/18/quinn-ewers-arch-manning-texas-quarterback-controversy/75144375007/",
          urlToImage:
            "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/17/USAT/75260464007-usatsi-24253317.jpg?crop=3360,1890,x270,y560&width=3200&height=1800&format=pjpg&auto=webp",
          publishedAt: "2024-09-19T14:20:17Z",
          content:
            "1. The Texas football QB decision\r\n" +
            "It's not a matter of if Arch Manning is going to play well. It's how good it will look if and when he does again.\r\n" +
            "And how it could change the dynamic of the quarte… [+10224 chars]",
        },
        {
          source: [Object],
          author: "Ines Ferré",
          title:
            "Stock market today: Dow surges 500 points as Fed-fueled stocks set sights on records - Yahoo Finance",
          description:
            "Wall Street has absorbed the Fed's message that a deep cut will prove positive for the economy.",
          url: "https://finance.yahoo.com/news/live/stock-market-today-dow-surges-500-points-as-fed-fueled-stocks-set-sights-on-records-133052211.html/",
          urlToImage:
            "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
          publishedAt: "2024-09-19T14:18:37Z",
          content:
            `US stocks soared on Thursday amid growing optimism that the Federal Reserve's jumbo interest-rate cut will deliver a "soft landing" for the US economy.\r\n` +
            "The S&amp;P 500 (^GSPC) climbed roughly 1.7%, … [+4639 chars]",
        },
        {
          source: [Object],
          author: null,
          title:
            "NFL odds, Vegas lines, picks, spreads, game predictions: Model loving Browns, Bengals in Week 3, 2024 - CBS Sports",
          description:
            "SportsLine's advanced model has locked in its Week 3 NFL betting picks from 10,000 simulations",
          url: "https://www.cbssports.com/nfl/news/nfl-odds-vegas-lines-picks-spreads-game-predictions-model-loving-browns-bengals-in-week-3-2024/",
          urlToImage:
            "https://sportshub.cbsistatic.com/i/r/2023/12/27/55b28400-548d-49d4-ba79-221e2f52225f/thumbnail/1200x675/d6b0fb47c5f75652fffc05dd311bc29b/amari-cooper-browns-usatsi.jpg",
          publishedAt: "2024-09-19T13:22:14Z",
          content:
            "The Philadelphia Eagles suffered a brutal loss in Week 2, allowing the Atlanta Falcons to drive 70 yards in just 65 seconds. The Falcons capped the drive with a game-winning, seven-yard touchdown pas… [+5336 chars]",
        },
        {
          source: [Object],
          author: "Jarrell Dillard",
          title:
            "Applications for US Jobless Benefits Fall to a Four-Month Low - Bloomberg",
          description:
            "Applications for US unemployment benefits fell to the lowest level since May, indicating the job market remains healthy despite a slowdown in hiring.",
          url: "https://www.bloomberg.com/news/articles/2024-09-19/applications-for-us-jobless-benefits-fall-to-a-four-month-low",
          urlToImage:
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7bbGuBDp3nM/v1/1200x800.jpg",
          publishedAt: "2024-09-19T12:47:11Z",
          content:
            "Applications for US unemployment benefits fell to the lowest level since May, indicating the job market remains healthy despite a slowdown in hiring.\r\n" +
            "Initial claims decreased by 12,000 to 219,000 in… [+272 chars]",
        },
        {
          source: [Object],
          author: "Morgan Whitley",
          title:
            "Metal band books first Empower Field stadium show of 2025 - FOX 31 Denver",
          description:
            "Empower Field at Mile High has set its first stadium show of 2025, and it includes a famous metal band.",
          url: "https://kdvr.com/news/local/metallica-to-perform-2-shows-in-denver-empower-field-2025/",
          urlToImage:
            "https://kdvr.com/wp-content/uploads/sites/11/2024/09/AP11102805552.jpg?w=1280",
          publishedAt: "2024-09-19T12:21:55Z",
          content:
            "DENVER (KDVR) Empower Field at Mile High has set its first stadium show of 2025, and it includes a famous metal band.\r\n" +
            "Better start practicing that headbanging. On Thursday, Metallica announced they … [+1447 chars]",
        },
        {
          source: [Object],
          author: "Natasha Lomas",
          title:
            "EU to tell Apple how to do interoperability, DMA style - TechCrunch",
          description: `The European Union has opened two "specification proceedings" on Apple under the bloc's Digital Markets Act (DMA) that will see it instructing the iPhone`,
          url: "https://techcrunch.com/2024/09/19/eu-to-tell-apple-how-to-do-interoperability-dma-style/",
          urlToImage:
            "https://techcrunch.com/wp-content/uploads/2017/06/gettyimages-634120964.jpg?resize=1200,790",
          publishedAt: "2024-09-19T12:20:40Z",
          content:
            "The European Union has opened two “specification proceedings” on Apple under the bloc’s Digital Markets Act (DMA) that will see it instructing the iPhone maker on how to comply with certain interoper… [+5860 chars]",
        },
        {
          source: [Object],
          author: "Reuters",
          title:
            "Husband of Russia's richest woman arrested on murder charge after office shootout - Reuters",
          description:
            "Vladislav Bakalchuk, the estranged husband of Russia's richest woman, was arrested and charged with murder on Thursday, his lawyers said, after a deadly shootout at the Moscow office of Russia's largest online retailer.",
          url: "https://www.reuters.com/world/europe/husband-russias-richest-woman-arrested-murder-charge-after-office-shootout-2024-09-19/",
          urlToImage:
            "https://www.reuters.com/resizer/v2/YS73ZHNEMZOIFKEBXP7QC7R444.jpg?auth=0be886d5bf220c0540d26ef9c0c4795c69bef41916a70da52606e003bf53063b&height=1005&width=1920&quality=80&smart=true",
          publishedAt: "2024-09-19T12:15:41Z",
          content: null,
        },
        {
          source: [Object],
          author: "Brittney Melton",
          title:
            "Why Teamsters won't endorse a candidate for 2024. And, how to avoid credit card debt. - NPR",
          description:
            "The Teamsters, a large and prominent union, is not endorsing a presidential candidate this cycle, breaking away from what other labor unions are doing. And, tips on how to avoid credit card debt.",
          url: "https://www.npr.org/2024/09/19/g-s1-23709/up-first-newsletter-teamsters-union-presidential-endorsement-hezbollah-walkie-talkie-explosions",
          urlToImage:
            "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6314x3552+0+0/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F64%2F66%2F8400d9444af0a5b6d2453acb9eb3%2Fgettyimages-2168373354.jpg",
          publishedAt: "2024-09-19T12:01:42Z",
          content:
            "Good morning. You're reading the Up First newsletter. Subscribe here to get it delivered to your inbox, and listen to the Up First podcast for all the news you need to start your day.\r\n" +
            "Today's top st… [+6056 chars]",
        },
        {
          source: [Object],
          author: null,
          title:
            "The Next Phone Era Is Almost Here. This Is How It's Shaping Up - CNET",
          description:
            "Smartphones will get much better at meeting your needs, and soon, thanks to AI.",
          url: "https://www.cnet.com/tech/mobile/features/the-next-phone-era-is-almost-here-this-is-how-its-shaping-up/",
          urlToImage:
            "https://www.cnet.com/a/img/resize/071ac4621094024d0f5e9258e7cbc5761811b815/hub/2024/09/19/c1a64b00-7ca5-4db0-bd54-7d1df5120287/000-static-thumnail-hero.jpg?auto=webp&fit=crop&height=675&width=1200",
          publishedAt: "2024-09-19T12:00:00Z",
          content:
            "In sci-fi shows like Westworld and The Expanse, characters use evolved mobile devices with sleek transparent designs that can project holograms or magically morph their interface as needed. \r\n" +
            "Fancifu… [+24787 chars]",
        },
        {
          source: [Object],
          author: "Elizabeth Howell",
          title:
            "SpaceX Crew-9 astronaut launch delayed to Sept. 26 - Space.com",
          description:
            "NASA astronaut and US Space Force Guardian Nick Hague will fly to the ISS from one of the military branch's launch pads.",
          url: "https://www.space.com/spacex-crew-9-iss-launch-delay",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/HZ82oE7wzj5Tr5rkK9QAya-1200-80.jpg",
          publishedAt: "2024-09-19T11:56:18Z",
          content:
            "Editor's note: This piece was updated on Sept. 19 to reflect the most current launch times from NASA.\r\n" +
            "The next space station astronaut mission has been delayed to Sept. 26.\r\n" +
            "The delay in the SpaceX … [+4872 chars]",
        },
        {
          source: [Object],
          author: "WILL WEISSERT",
          title:
            "Harris plans a livestream with Oprah Winfrey while Trump is set to address an Israeli-American group - The Associated Press",
          description:
            "Kamala Harris and Donald Trump are set to make appearances that are meant to fire up core supporters. Harris is participating in a livestream Thursday night with Oprah Winfrey in Michigan. Trump is scheduled to attend an evening event in Washington with promi…",
          url: "https://apnews.com/article/harris-trump-oprah-winfrey-miriam-adelson-f9384395f54a0d071ab52bca80d3659e",
          urlToImage:
            "https://dims.apnews.com/dims4/default/62204be/2147483647/strip/true/crop/4408x2480+0+230/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F87%2F5a%2Fbadd312c7cc0552b426062b94650%2Fb685599831884f2a8f39ecf2a78dd006",
          publishedAt: "2024-09-19T11:12:00Z",
          content:
            "WASHINGTON (AP) Both major presidential candidates are making appearances Thursday meant to fire up their core supporters, with Vice President Kamala Harris participating in a livestream with Oprah W… [+2848 chars]",
        },
        {
          source: [Object],
          author: "Janet Loehrke",
          title:
            "Earth is about to get a mini-moon (temporarily). What to know about asteroid 2024 PT5. - USA TODAY",
          description:
            "The asteroid, named 2024 PT5, will do a 56-day horseshoe-shaped fly-by near Earth before it continues on it journey.",
          url: "https://www.usatoday.com/story/graphics/2024/09/19/asteroid-mini-moon-2024-pt5/75260498007/",
          urlToImage:
            "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/17/USAT/75262028007-uastgraphics-asteroid-2024-pt-5-topper.png?crop=3360,1890,x300,y0&width=3200&height=1800&format=pjpg&auto=webp",
          publishedAt: "2024-09-19T11:03:45Z",
          content:
            "This story was updated to add new information.\r\n" +
            "The Earth will soon have a second mini-moon, although it will be a brief visit.\r\n" +
            "Scientists wrote about the mini-moon and its anticipated orbit around … [+2403 chars]",
        },
        {
          source: [Object],
          author: "The MMQB Staff",
          title:
            "NFL Week 3 Picks From the MMQB Staff: Ravens Visit Cowboys Seeking First Win - Sports Illustrated",
          description: "Our writers and editors pick winners in all 16 games.",
          url: "https://www.si.com/nfl/2024-nfl-week-3-staff-expert-picks",
          urlToImage:
            "https://images2.minutemediacdn.com/image/upload/c_crop,w_3897,h_2192,x_0,y_113/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01j82wd0xyh5ckq4dt6m.jpg",
          publishedAt: "2024-09-19T11:00:01Z",
          content:
            "Its Week 3! Last week was chaos\r\n" +
            " with upsets galore, and only one of our staffers was above .500 with their game picks (the other five all went exactly 88). So should we expect more of the same this… [+881 chars]",
        },
        {
          source: [Object],
          author: "Kellianne Klass",
          title:
            "Formation chances rise as NHC monitors disturbance that could develop, impact Florida soon - WESH 2 Orlando",
          description:
            "Because the low hasn't even formed yet, it's too early to know exactly where the system will head or how strong it will become. Here's the latest:",
          url: "https://www.wesh.com/article/tropical-disturbance-next-week-florida-path/62274996",
          urlToImage:
            "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gx1czbfwqaatsue-66ebfd8938139.jfif?crop=1.00xw:1.00xh;0,0&resize=1200:*",
          publishedAt: "2024-09-19T10:53:00Z",
          content:
            "ORLANDO, Fla. —The National Hurricane Center is watching an area of interest in the Caribbean that some models say could have a path toward Florida.\r\n" +
            "Area of interest in the Caribbean Sea\r\n" +
            "According … [+3736 chars]",
        },
        {
          source: [Object],
          author: "By  DR. ITAY GAL",
          title:
            "New XEC coronavirus variant spreading worldwide: What you need to know - The Jerusalem Post",
          description:
            "The coronaviruses have continued to create new strains, the latest being XEC, which can evade the immune system. Here’s everything you need to know.",
          url: "https://www.jpost.com/health-and-wellness/article-820869",
          urlToImage:
            "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/565106",
          publishedAt: "2024-09-19T10:52:00Z",
          content:
            "Coronavirus has not stopped producing new strains; the latest out in the world has figured out a way to step around your immune system.\r\n" +
            "The new variant, called XEC, was first discovered in Germany a… [+3639 chars]",
        },
        {
          source: [Object],
          author: "SamMobile - Samsung news",
          title:
            "Gemini Live is rolling out to Galaxy phones for free - SamMobile - Samsung news",
          description: null,
          url: "https://www.sammobile.com/news/gemini-live-rolling-out-galaxy-phones-free/",
          urlToImage: null,
          publishedAt: "2024-09-19T10:36:00Z",
          content: null,
        },
        {
          source: [Object],
          author: "Edwin Evans-Thirlwell",
          title:
            'Nintendo and The Pokémon Company are suing the Palworld developers for "infringement of patent rights" - Rock Paper Shotgun',
          description:
            "Just when you thought it was safe to go back into the Palwoods and hunt large, electric yellow animals of entirely orig…",
          url: "https://www.rockpapershotgun.com/nintendo-and-the-pokemon-company-are-suing-the-palworld-developers-for-infringement-of-patent-rights",
          urlToImage:
            "https://assetsio.gnwcdn.com/mewtodarkmutant.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
          publishedAt: "2024-09-19T10:20:25Z",
          content:
            'Just when you thought it was safe to go back into the Palwoods and hunt large, electric yellow animals of entirely original design whose names rhyme with "peekaboo", Nintendo and The Pokémon Company … [+2959 chars]',
        },
        {
          source: [Object],
          author: "Krishn Kaushik",
          title:
            "Exclusive: Ammunition from India enters Ukraine, raising Russian ire - Reuters",
          description:
            "European customers have been transferring Indian munitions to Ukraine and, despite Russian protests, India sees arms exports as a commercial opportunity.",
          url: "https://www.reuters.com/world/ammunition-india-enters-ukraine-raising-russian-ire-2024-09-19/",
          urlToImage:
            "https://www.reuters.com/resizer/v2/MLSL2BKL7FIBHKBT5MMHXJDSKQ.jpg?auth=fafe9f2e030719cba751d150332401d021532afee84e3fe20324233febf8f0cb&height=1005&width=1920&quality=80&smart=true",
          publishedAt: "2024-09-19T10:14:23Z",
          content:
            "NEW DELHI, Sept 19 (Reuters) - Artillery shells sold by Indian arms makers have been diverted by European customers to Ukraine and New Delhi has not intervened to stop the trade despite protests from… [+8387 chars]",
        },
        {
          source: [Object],
          author: "JINTAMAS SAKSORNCHAI",
          title:
            "Pygmy hippo Moo Deng is so adored she may get her own patent - The Associated Press",
          description:
            "Only a month after the adorable baby hippo Moo Deng was unveiled on Facebook, her fame became unstoppable both domestically and internationally. Zookeeper Atthapon Nundee of Thailand’s Khao Kheow Open Zoo has been posting cute moments of the animals in his ca…",
          url: "https://apnews.com/article/moo-deng-baby-hippo-thailand-zoo-27485f0cbc70071252be45d870d507aa",
          urlToImage:
            "https://dims.apnews.com/dims4/default/c8c6595/2147483647/strip/true/crop/5447x3064+0+284/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fee%2F9f%2Ffe483242bc5e63ae5a0d93c6b0d2%2F481cf2577bf64c5e9cc430321c077f72",
          publishedAt: "2024-09-19T10:14:00Z",
          content:
            "CHONBURI, Thailand (AP) Only a month after Thailands adorable baby hippo Moo Deng was unveiled on Facebook, her fame became unstoppable. \r\n" +
            "Fans unable to make the two-hour drive to Khao Kheow Open Zo… [+5277 chars]",
        },
        {
          source: [Object],
          author: "James Mackenzie",
          title:
            "Israel bombs Lebanon after radio blasts, says it thwarts assassination plot - Reuters",
          description:
            "The bombing came a day after explosions of Hezbollah radios that followed blasts in booby trapped pagers, setting the foes hurtling towards war.",
          url: "https://www.reuters.com/world/middle-east/israeli-strikes-hit-multiple-targets-lebanon-2024-09-19/",
          urlToImage:
            "https://www.reuters.com/resizer/v2/WKTZIJL7X5IZBK4YFXNQ3IEGHE.jpg?auth=3709cc21bc7cbe1c3c542df0f254ad9e36a400ae90749733e7b04f48375e2827&height=1005&width=1920&quality=80&smart=true",
          publishedAt: "2024-09-19T10:04:28Z",
          content: null,
        },
      ],
    };
    setNews([...response.articles]);
  };

  useEffect(() => {
    HandleFetch();
  }, []);

  const selectPagehandler = (ind) => {
    setPage(ind);
  };

  const nextPageHandler = (ind) => {
    if (ind >= News.length / 10) {
      console.log("no next page ");
    } else {
      setPage(ind + 1);
    }
  };

  const prevPageHandler = (ind) => {
    if (ind <= 1) {
      console.log("no prev page ");
    } else {
      setPage(ind - 1);
    }
  };

  console.log(News);
  return (
    <>
      <div className="Main box-border absolute m-0 p-0">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                NewsLive
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="strokeLinecap"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="h-[100px] w-full"></div>
        <div className="w-screen">
          {News.length > 0 && (
            <div className="products">
              {News.slice(Page * 10 - 10, Page * 10).map((item, index) => (
                <Cards key={index} data={item} />
              ))}
            </div>
          )}
          {News.length > 0 && (
            <div className="pagination">
              <span
                className={Page > 1 ? "" : "pagination__disabled"}
                onClick={() => {
                  prevPageHandler(Page);
                }}
              >
                ⬅️
              </span>
              {[...Array(News.length / 10)].map((product, index) => (
                <span
                  className={Page === index + 1 ? "pagination__active" : ""}
                  onClick={() => {
                    selectPagehandler(index + 1);
                  }}
                  key={index + 1}
                >
                  {index + 1}
                </span>
              ))}
              <span
                className={
                  Page < News.length / 10 ? "" : "pagination__disabled"
                }
                onClick={() => {
                  nextPageHandler(Page);
                }}
              >
                ➡️
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
