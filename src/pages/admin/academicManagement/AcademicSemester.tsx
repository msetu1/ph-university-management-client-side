import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from 'antd';
import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement";
import { useState } from "react";
import { TQueryParam } from "../../../types";
export type TTableData = Pick<
    TAcademicSemester,
    "name" | "year" | "startMonth" | "endMonth"
>;
const AcademicSemester = () => {
  const [params,setParams]=useState<TQueryParam[]|undefined>(undefined)
    const {data:semesterData,isLoading,isFetching}=useGetAllSemesterQuery(params);

    const tableData=semesterData?.data?.map(({_id,name,year,startMonth,endMonth})=>({
        key:_id,name,year,startMonth,endMonth
    }))
    console.log(tableData)
      
      const columns: TableColumnsType<TTableData> = [
        {
          title: 'Name',
          dataIndex: 'name',
          showSorterTooltip: { target: 'full-header' },
          filters: [
            {
              text: 'Autumn',
              value: 'Autumn',
            },
            {
              text: 'Summer',
              value: 'Summer',
            },
            {
              text: 'Fall',
              value: 'Fall',
            },
          ],
          
        },
        {
          title: 'Year',
          dataIndex: 'year',
          filters: [
            {
              text: '2024',
              value: '2024',
            },
            {
              text: '2025',
              value: '2025',
            },
            {
              text: '2026',
              value: '2026',
            },
          ],
        },
        {
          title: 'Start Month',
          dataIndex: 'startMonth',
        },
        {
          title: 'End Month',
          dataIndex: 'endMonth',
        },
        {
          title: 'Action',
          key:'X',
          dataIndex: 'endMonth',
          render:()=>{
            return (
              <div><Button>Update</Button></div>
            )
          }
        },
      ];
      const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
       if(extra.action==='filter'){
        const queryParams:TQueryParam[]=[];

        filters.name?.forEach((item)=>queryParams.push({name:'name',value:item}))
        filters.year?.forEach((item)=>queryParams.push({name:'year',value:item}))
          setParams(queryParams)

       }
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

export default AcademicSemester;