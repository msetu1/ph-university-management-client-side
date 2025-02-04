import { Input } from "antd";
import { Controller} from "react-hook-form";

type TInputProps={
    type:string;
    name:string;
    label?:string;
}

const PHInput = ({type,name,label}:TInputProps) => {
    return (<div style={{marginBottom:'20px'}}>
    <p style={{marginBottom:'8px'}}>{label?label:null}</p>
    <Controller 
    name={name} 
    render={({field})=><Input {...field} type={type} id={name} />} />
    </div>)
};

export default PHInput;