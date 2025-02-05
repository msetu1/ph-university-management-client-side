import { Button, Col, Flex } from "antd";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import { useAddAcademicFacultyMutation } from "../../../redux/feature/admin/academicManagement.api";

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty]=useAddAcademicFacultyMutation()

    const onSubmit = async() => {

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