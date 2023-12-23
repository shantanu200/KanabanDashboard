import React from 'react'
import { ICompleteData, IGroupedPriority, IGroupedUser, ITicket } from '../IData'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon, StopCircleIcon } from '@heroicons/react/24/outline';
import { Avatar } from '@mui/material';

interface ICardProps {
    data: ITicket;
    user: string;
}

const Card: React.FC<ICardProps> = (props) => {
    const { data, user } = props;
    const IconMap = {
        'Todo': <PlusCircleIcon className='w-4 h-4 text-yellow-600' />,
        'In progress': <EllipsisHorizontalCircleIcon className='w-4 h-4' />,
        'Backlog': <StopCircleIcon className='w-4 h-4' />,
    }
    // console.log(user[data.userId]);
    return (
        <div className='p-4 my-4 bg-white rounded-lg shadow-lg'>
            <div>
                <div className='flex items-center justify-between'>
                    <h3 className='text-sm text-gray-500'>{data.id}</h3>
                    <Avatar sx={{height:24,width:24,fontSize:12,bgcolor:'green'}}>{user[0]}</Avatar>
                </div>
                <p className='flex gap-2 my-4 text-sm font-semibold text-black'>{IconMap[data.status]}
                    <span>{data.title}</span>
                </p>
            </div>
            <div className='flex items-center w-1/2 gap-2 p-1 text-sm border rounded-sm'>
                <p className='w-3 h-3 bg-gray-400 rounded-full'></p>
                {data.tag}
            </div>
        </div>
    )
}

export default Card