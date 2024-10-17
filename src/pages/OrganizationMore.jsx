import { ArrowLeftOutlined, EditOutlined, LineOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

function OrganizationMore() {
    const navigate = useNavigate()
    const {id} = useParams()

    const [singleDate, setSingleDate] = useState({})
    useEffect(() => {
        useAxios().get(`/organization/${id}`).then(res => {
            setSingleDate(res.data)
        })
    },[])
    return (
        <div className='p-5'>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-5">
                    <button onClick={() => navigate(-1)} className='scale-[1.3]'><ArrowLeftOutlined/></button>
                    <h2 className='font-bold text-[25px]'>{singleDate.companyName ? singleDate.companyName : <LineOutlined/> }</h2>
                </div>
                <Button icon={<EditOutlined/>} size='large' htmlType='submit' type='primary' >Tahrirlash</Button>
            </div>
            <ul className='w-[50%] rounded-lg p-5 items-end justify-between flex border-[2px] border-slate-600'>
                <li className='space-y-5 w-[50%]'>
                    <li className='flex flex-col pl-3'>
                        <span className='text-[15px] text-slate-500 '>ID</span>
                        <strong className='text-[22px]'>{singleDate.id}</strong>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-[15px] text-slate-500 '>Tashkilot nomi</span>
                        <strong className='text-[22px]'>{singleDate.companyName}</strong>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-[15px] text-slate-500 '>INN</span>
                        <strong className='text-[22px]'>{singleDate.inn ? singleDate.inn : <LineOutlined/>}</strong>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-[15px] text-slate-500 '>Joylashgan nomi</span>
                        <strong className='text-[22px]'>{singleDate.regionPlace}</strong>
                    </li>
                </li>
                <li className='space-y-5 w-[50%]'>
                    <li className='flex flex-col'>
                        <span className='text-[15px] text-slate-500 '>Manzil </span>
                        <strong className='text-[22px]'>{singleDate.address}</strong>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-[15px] text-slate-500 '>Yaratilgan vaqti</span>
                        <strong className='text-[22px]'>{singleDate.createdAt}</strong>
                    </li>
                    <li className='flex flex-col'>
                        <span className='text-[15px] text-slate-500 '>Holati </span>
                        <strong className='text-[22px]'>{singleDate.status ? "Foal" : "Foal emas"}</strong>
                    </li>
                </li>
                
            </ul>
        </div>
    )
}

export default OrganizationMore
