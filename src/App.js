import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./components/Users/Register/Register";
import Login from "./components/Users/Login/Login";
import Navbar from "./components/Navigation/Navbar";
import AddNewCategory from "./components/Categories/AddNewCategory";
import CategoryList from "./components/Categories/CategoryList";
import UpdateCategory from "./components/Categories/UpdateCategory";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectedRoute copy";
import AdminRoute from "./components/Navigation/ProtectedRoutes/AdminRoute";
import CreatePost from "./components/Posts/CreatePost";
import PostsList from "./components/Posts/PostsList";
import PostDetails from "./components/Posts/PostDetails";
import UpdatePost from "./components/Posts/UpdatePost";
import UpdateComment from "./components/Comments/UpdateComment";
import Profile from "./components/Users/Profile/Profile";
import UploadProfilePhoto from "./components/Users/Profile/UploadProfilePhoto";
import UpdateProfileForm from "./components/Users/Profile/UpdateProfileForm";
import ALogin from "./components/Admin/Login/Login";
import ARegister from "./components/Admin/Register/Register";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

      <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/admin_register" element={<ARegister/>}/>
        <Route exact path="/admin_login" element={<ALogin/>}/>
       
      <Route exact path='/' element={<AdminRoute/>}>
            <Route exact path='/add-category' element={<AddNewCategory/>}/>
          </Route>
          <Route exact path='/' element={<AdminRoute/>}>
          <Route
          exact
          path="/update-post/:id"
          element={<UpdatePost/>}
        />
          </Route>
          <Route exact path='/' element={<AdminRoute/>}>
            <Route exact path='/update-category/:id' element={<UpdateCategory/>}/>
          </Route>
          <Route exact path='/' element={<PrivateProtectRoute/>}>
            <Route exact path='/create-post' element={<CreatePost/>}/>
          </Route>
          <Route exact path='/' element={<PrivateProtectRoute/>}>
            <Route exact path='/upload-profile-photo' element={<UploadProfilePhoto/>}/>
          </Route>
          <Route exact path='/' element={<PrivateProtectRoute/>}>
            <Route exact path='/profile/:id' element={<Profile/>}/>
          </Route>
          <Route exact path='/' element={<PrivateProtectRoute/>}>
            <Route exact path='/update-comment/:id' element={<UpdateComment/>}/>
          </Route>
          <Route exact path='/' element={<PrivateProtectRoute/>}>
            <Route exact path='/create-post/:id' element={<UpdatePost/>}/>
          </Route>
          <Route exact path='/' element={<PrivateProtectRoute/>}>
            <Route exact path='/update-profile/:id' element={<UpdateProfileForm/>}/>
          </Route>
          <Route exact path='/' element={<AdminRoute/>}>
          <Route exact path="/category-list" element={<CategoryList/>}/>
          </Route>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/posts" element={<PostsList/>}/>
        <Route exact path="/posts/:id" element={<PostDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
