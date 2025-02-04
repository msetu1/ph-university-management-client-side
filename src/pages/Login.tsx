import { Button, Row } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
    const navigate=useNavigate()
    const dispatch=useAppDispatch();
    // const {register}=useForm({
    //     defaultValues:{
    //         userId:'A-0001',
    //         password:'admin123'
    //     },
    // });
   const  defaultValues={
        userId:'A-0001',
        password:'admin123'
   }
    const [login]=useLoginMutation()

   
const onSubmit = async(data:FieldValues) => {
    console.log(data)
           const toastId= toast.loading('Logged in')
           try {
                const userInfo={
                    id:data.userId,
                    password:data.password
                }
    console.log(userInfo)

                const res =await login(userInfo).unwrap()
                const user =verifyToken(res.data.accessToken)as TUser
                console.log(user) 
                dispatch(setUser({user:user,token:res.data.accessToken}))
                toast.success('Logged in successfully',{id:toastId,duration:2000})
                navigate(`/admin/dashboard`)
        }
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     catch (err) {
        toast.error('Something went wrong',{id:toastId,duration:2000})
    }

}

    
    return (
        <Row justify='center' align='middle' style={{height:'100vh'}}>
            <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <PHInput type='text' name='userId' label='ID:' />
                <PHInput type='text' name='password' label='Password:' />
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;