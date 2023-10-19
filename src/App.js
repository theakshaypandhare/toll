import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './pages/style.scss'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login/login';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import Home from './pages/home/home';
import Profile from './pages/profile/Profile';
import CreateCaseStudy from './pages/createcasestudy/create_case_study';
import AddCaseStudy from './pages/createcasestudy/add_case_study';
import Login1 from './pages/login/Login1';
import CreateProfile from './pages/createprofile/CreateProfile';
import AdminCommunity from './pages/admincommunity/AdminCommunity';
import Assignment from './pages/assignment/Assignment';
import AddAssignment from './pages/addassignment/AddAssignment';
import AddOption from './pages/addoption/AddOption';
import Solve from './pages/solve/Solve'; 
import Result from './pages/result/Result';
import CaseStudy from './pages/casestudy/CaseStudy';
import Updated from './pages/updated/Updated';
import CsPage from './pages/cspage/CsPage';
import CriticalAnalysis from './pages/criticalanalysis/CriticalAnalysis';
import AsPage from './pages/aspage/AsPage';
import ChatPage from './pages/chatpage/ChatPage';
import Hiking from './pages/hiking/Hiking';
import Messages from './pages/messages/Messages';
import GroupChats from './pages/groupchats/GroupChats';
import AddAssign from './pages/addassign/AddAssign';
import ResultUp from './pages/resultup/ResultUp';
import AcPage from './pages/acpage/AcPage';
import OptionAdd from './pages/optionadd/OptionAdd';
import Templates from './pages/templates/templates';
import Notification from './pages/notification/Notification';
import Leadvalution from './pages/leadvalution/Leadvalution';
import Analyatics from './pages/analyatics/Analyatics';
import Createchannel from './pages/channel/create-channel';
function App() {
  const currentUser = true;
  const Layout = () => {
    return (
      <div className='theme-light'>
        <Navbar />
        <div className='main-App'>
          <Leftbar />
          <div className='outlet-App'>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }
  const ProtedctedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<ProtedctedRoute><Layout /></ProtedctedRoute>),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/CreateCaseStudy",
          element: <CreateCaseStudy />,
        },
        {
          path: "/AddCaseStudy",
          element: <AddCaseStudy />,
        },
        {
          path: "/createprofile",
          element: <CreateProfile />,
        },       
    {
      path: "/admincommunity",
      element: <AdminCommunity />,
    },
    {
      path: "/assignment",
      element: <Assignment />,
    },
    {
      path: "/addassignment",
      element: <AddAssignment />,
    },
    {
      path: "/addoption",
      element: <AddOption />,
    },
    {
      path: "/solve",
      element: <Solve />,
    },
    {
      path: "/result",
      element: <Result />,
    },
    {
      path: "/analyatics",
      element: <Analyatics />,
    },
    {
      path: "/casestudy",
      element: <CaseStudy />,
    },
    {
      path: "/updated",
      element: <Updated />,
    },
    {
      path: "/cspage",
      element: <CsPage />,
    },
    {
      path: "/criticalanalysis",
      element: <CriticalAnalysis />,
    },
    {
      path: "/aspage",
      element: <AsPage />,
    },
    {
      path: "/templates",
      element: <Templates />,
    },
    {
      path: "/chatpage",
      element: <ChatPage />,
    },
    {
      path: "/hiking",
      element: <Hiking />,
    },
    {
      path: "/notification",
      element: <Notification />,
    },
    {
      path: "/leadvalution",
      element: <Leadvalution />,
    },
    {
      path: "/messages",
      element: <Messages />,
    },
    {
      path: "/createchannel",
      element: <Createchannel />,
    },
    {
      path: "/groupchats",
      element: <GroupChats />,
    },
    {
      path: "/addassign",
      element: <AddAssign />,
    },
    {
      path: "/resultup",
      element: <ResultUp />,
    },
    {
      path: "/acpage",
      element: <AcPage />,
    },
    {
      path: "/optionadd",
      element: <OptionAdd />,
    },
      ]
    }, 
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/login1",
      element: <Login1 />,
    },
  ]);

  return (
     <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
