/**
 * 1.Create a new Firebase Project in console.firebase.google.com,X
 * 2.npm install firebase just type the commend,X
 * 3.Create firebase.init.js and import getAuth to export auth,X
 * 4.Firebase Settings and go to Authentication enable email and password auth,X
 * 5.Create Login, SignUp Components, setup route,X
 * 6.attach form field handler and form submit handler,X
 * 7.Create npm install --save react-firebase-hooks,X
 * 8.useCreateUserWithEmailAndPassword from react-firebase-hooks,X
 * 9.If user is Created redirect to login page use navigation,X
 * 10.useSignInWithEmailAndPassword from react-firebase-hooks,X
 * 11.Create RequireAuth components, const [user] = useAuthState(auth);
  const location = useLocation(); get auth user
  if(!user){
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children;,X
 * 12.Go to react router authentication and click StackBlitz,X
 * 13.Edit Login page const from = location.state?.from?.pathname || '/' and navigate (form,{replace: true});X
 * 14.resetPassword import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth', const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );X
 * 15.Disable={!agree} Checkbox conditional css class useSate use and false value,
 * 16.email verification send with email useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
 * 17.Update name const [updateProfile, updating, updateError] = useUpdateProfile(auth); await updateProfile({ displayName, photoURL });alert('Updated profile');
 * 18.npm install --save react-toastify, import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';,
 */

/**
 * npm install -g firebase-tools,
 * firebase login,
 * firebase init
 */