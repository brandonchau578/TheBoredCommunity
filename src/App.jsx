import './App.css';
import Cards from './components/Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhotographyPage from './components/Links/PhotographyPage';
import GardeningPage from './components/Links/GardeningPage';
import CookingPage from './components/Links/CookingPage';
import HikingPage from './components/Links/HikingPage';
import ReadingPage from './components/Links/ReadingPage';
import PaintingPage from './components/Links/PaintingPage'
import TravelingPage from './components/Links/TravelingPage'
import MusicPage from './components/Links/MusicPage'
import GamingPage from './components/Links/GamingPage'
import VolunteeringPage from './components/Links/VolunteerPage'
const App = () => {
  const thingsToDo = [
    {
      content:"Photography",
      image:"https://www.shutterbug.com/images/styles/600_wide/public/Urban-Photography-Tips_0.jpg",
      path:"/photography"
    },
    {
      content:"Gardening",
      image:"https://media.istockphoto.com/id/1445716627/photo/woman-gardening-herbs-in-her-garden.jpg?s=612x612&w=0&k=20&c=tqMYF60u5xwwesZwJEKIT6OzBBVVxs-blBnSburU59E=",
      path:"/gardening"
    },
    {
      content:"Cooking/Baking",
      image:"https://t4.ftcdn.net/jpg/02/54/93/61/360_F_254936166_5MFxlGv7PNPw4VmpuNNQxlU0K2D4f7Ya.jpg",
      path:"/cooking"
    },
    {
      content:"Hiking",
      image:"https://t3.ftcdn.net/jpg/01/09/20/40/360_F_109204081_CvSWBmG5pRGDwIERPX0Uv97YSn7dTdoV.jpg",
      path:"/hiking"
    },
    {
      content:"Reading",
      image:"https://media.istockphoto.com/id/1373105718/photo/man-working-or-studying-with-book-business-and-education-concept.webp?b=1&s=612x612&w=0&k=20&c=78-pEV1cT67yH4dxw6AQpuEJdJo-lts4G-IER-bXtow=",
      path:"/reading"
    },
    {
      content:"Painting",
      image: "https://t3.ftcdn.net/jpg/08/22/33/22/360_F_822332237_GTcUQn3TP1LDgd6z3RFrILGqCeLUoZ8J.jpg",
      path:"/painting"
    },
    {
      content:"Traveling",
      image:"https://t4.ftcdn.net/jpg/04/08/81/09/360_F_408810925_IG49PMSfC7ZolH4ZLYNZTVuy8YN0BhGK.jpg",
      path:"/traveling"

    },
    {
      content:"Music",
      image:"https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?cs=srgb&dl=pexels-brent-keane-181485-1751731.jpg&fm=jpg",
      path:"/music"

    },
    {
      content:"Gaming",
      image:"https://www.shutterstock.com/image-photo/gaming-home-portrait-happy-gamer-260nw-2193103319.jpg",
      path:"/gaming"

    },
    {
      content:"Volunteering",
      image:"https://t4.ftcdn.net/jpg/03/42/78/23/360_F_342782317_UTpNsf0Bue6iKeFqwBPMjPSGNEQHUn0o.jpg",
      path:"/volunteering"

    }
  ];

  return (
    <Router>
      <Routes>
        <Route 
          path = "/"
          element={
          <div className="PageContainer">
            <div className = "TitleContainer">
              <h1> The Bored Community</h1>
              <p> Hey! Welcome to the Bored Community! Here are some things to do when you have nothing to do at home and want to spend some time being productive!</p>
            </div>
            <div className = "CardsContainer">
              {thingsToDo.map((item, index)=>(
              <Cards key={index} content={item.content} image={item.image} path={item.path}/>
            ))}
            </div>
          </div>
          }
        />    
        <Route path="/photography" element={<PhotographyPage />}/>
        <Route path="/gardening" element ={<GardeningPage />} />
        <Route path="/cooking" element ={<CookingPage />} />
        <Route path="/hiking" element ={<HikingPage />} />
        <Route path="/reading" element ={<ReadingPage />} />
        <Route path="/painting" element ={<PaintingPage />} />
        <Route path="/traveling" element ={<TravelingPage />} />
        <Route path="/music" element ={<MusicPage />} />
        <Route path="/gaming" element ={<GamingPage />} />
        <Route path="/volunteering" element ={<VolunteeringPage />} />
      </Routes>
    </Router>
  );
};

export default App
