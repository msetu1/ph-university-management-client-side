import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAcademicFacultiesQuery } from "../../../redux/feature/admin/academicManagement.api";
import { TAcademicFaculties } from "../../../types";

const AcademicFaculty = () => {
    const {data:facultyData,isLoading,isFetching}=useGetAcademicFacultiesQuery(undefined)
    const tableData=facultyData?.data?.map(({_id,name})=>({
        key:_id,name
    }))
    const columns: TableColumnsType<TAcademicFaculties> = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
      ];

    const onChange: TableProps<TAcademicFaculties>['onChange'] = (pagination, filters, sorter, extra) => {
           console.log(pagination,filters,sorter,extra)
    };

    if(isLoading){
        return <p>loading</p>
      }
    return (
        <Table
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
        />
    );
};

export default AcademicFaculty;