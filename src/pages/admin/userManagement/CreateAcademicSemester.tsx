import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { nameOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/AcademicManagementt.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/feature/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";



const currentYear =new Date().getFullYear()
const yearOptions=[0,1,2,3,4].map((number)=>({
    value:String(currentYear+number),
    label:String(currentYear+number)
}))
const CreateAcademicSemester = () => {

    const [addAcademicSemester]=useAddAcademicSemesterMutation()

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        const toastId=toast.loading('loading.....')
        const name =nameOptions[Number(data?.name)-1]?.label
            const semesterData={
                    name,
                    code:data.name,
                    year:data.year,
                    startMonth:data.startMonth,
                    endMonth:data.endMonth,

            }
            try {
        const res =await addAcademicSemester(semesterData)as TResponse
        if(res?.error){
            toast.error(res.error.data.message,{id:toastId})
        }else{
            toast.success('Academic Semester created successfully',{id:toastId})
        }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                toast.error('Something went wrong',{id:toastId})
            }
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)} >
                    <PHSelect label='Name' name='name'  options={nameOptions} />
                    <PHSelect label="Year" name="year" options={yearOptions}/>
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions}/>
                    <PHSelect label="End Month" name="endMonth" options={monthOptions}/>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;