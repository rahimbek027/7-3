import { LineOutlined, MedicineBoxOutlined, DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Input, Popover } from 'antd';
import React, { useEffect, useState } from 'react';
import CustomSelect from '../components/CustomSelect';
import CustomTable from "../components/CustomTable";
import { useAxios } from '../hooks/useAxios';
import { useNavigate } from 'react-router-dom';

function Organization() {
  // State definitions
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [regionId, setRegionId] = useState("");

  // Table columns definition
  const columns = [
    { title: 'ID', dataIndex: 'index' },
    { title: 'Tashkilot nomi', dataIndex: 'companyName' },
    { title: 'INN', dataIndex: 'inn' },
    { title: 'Holati', dataIndex: 'status' },
    { title: 'Filial', dataIndex: 'regionPlace' },
    { title: 'Manzil', dataIndex: 'address' },
    { title: 'Yaratilgan vaqti', dataIndex: 'createdAt' },
    { title: 'Batafsil', dataIndex: 'action' },
  ];

  // Regions for dropdown selection
  const RegionsList = [
    { value: 1, label: "Toshkent shahar" },
    { value: 2, label: "Samarqand vilayati" },
    { value: 3, label: "Xorazm vilayati" },
    { value: 4, label: "Adijon vilayati" },
  ];

  // Search functionality
  function handleSearchBtn(e) {
    setIsLoading(true);
    if (e.target.value) {
      const filteredInput = data.filter(item =>
        item.companyName && item.companyName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filteredInput);
      setIsLoading(false);
    } else {
      setRefresh(!refresh);
    }
  }

  // Fetch organizations from API
  useEffect(() => {
    setIsLoading(true);
    useAxios().get(`/organization?regionId=${regionId}`)
      .then(res => {
        setData(res.data.map((item, index) => {
          item.index = index + 1;
          item.address = (
            <Popover placement="top" content={item.address}>
              <p className='text-ellipsis whitespace-nowrap cursor-pointer overflow-hidden w-[150px] inline-block'>{item.address}</p>
            </Popover>
          );
          item.companyName = item.companyName ? item.companyName : <LineOutlined />;
          item.inn = item.inn ? item.inn : <LineOutlined />;
          item.status = ["Faol", "Jarayonda", "Faol emas"][item.status - 1] || "Noma'lum";
          item.action = (
            <div className='flex items-center gap-10'>
              <DeleteOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300' />
              <EditOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300' />
              <MoreOutlined onClick={() => navigate(item.id)} className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300 rotate-[90deg]' />
            </div>
          );
          return item;
        }));
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [refresh, regionId]);

  return (
    <div className='p-5 bg-[#F3F4F6] min-h-screen'>
      <div className="flex items-center justify-between">
        <div>
          <h2 className='font-bold text-[25px]'>Tashkilotlar</h2>
          <span className='text-[15px] pl-1 text-slate-500'>tashkilotlar ({data.length})</span>
        </div>
        <Button onClick={() => navigate("add")} icon={<MedicineBoxOutlined />} size='large' type='primary'>Qo'shish</Button>
      </div>
      <div className="flex mt-5 items-center space-x-5">
        <Input onInput={handleSearchBtn} className='w-[350px]' placeholder='Qidirish...' size='large' allowClear />
        <CustomSelect width={"350px"} placeholder={"Tanlash..."} setChooseId={setRegionId} option={RegionsList} />
      </div>
      <div className="mt-5">
        <CustomTable columns={columns} data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Organization;
