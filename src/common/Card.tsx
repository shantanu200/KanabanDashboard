import React from 'react'
import { ICompleteData, IGroupedPriority, ITicket } from '../IData'

interface ICardProps {
    data: ITicket;
}

const Card: React.FC<ICardProps> = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <div className='p-4 mb-4 bg-white rounded-lg'>
            <div>
                <h3 className='text-sm text-gray-500'>{data.id}</h3>
                <p className='my-2 text-sm font-bold text-black'>{data.title}</p>
            </div>
            <div>
                {data.tag}
            </div>
        </div>
    )
}

export default Card