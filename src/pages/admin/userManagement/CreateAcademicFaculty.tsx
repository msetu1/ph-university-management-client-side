import { Button, Col, Flex } from "antd";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import { useAddAcademicFacultyMutation } from "../../../redux/feature/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../../types";

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty]=useAddAcademicFacultyMutation()

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        const toastId=toast.loading('loading.....')
        const facultyData={
            name:data.name
        }
        try {
            console.log(facultyData)
            const res =await addAcademicFaculty(facultyData)as TResponse
                if(res?.error){
                    toast.error(res.error.data.message,{id:toastId})
                }else{
                    toast.success('Academic Faculty created successfully',{id:toastId})
                }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            toast.error('Something went wrong',{id: toastId})
        }
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
            <PHForm onSubmit={onSubmit}>
                <PHInput type="name" name="name" label="Name" />
                <Button htmlType="submit">Submit</Button>
            </PHForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicFaculty;