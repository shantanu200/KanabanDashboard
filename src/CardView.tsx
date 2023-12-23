import React, { useEffect, useReducer, useState } from 'react'
import Card from './common/Card'
import { ICompleteData, IGroupedPriority } from './IData';
import { filterByPriority, filterByStatus, filterByUser } from './Functions/DataModulation';

interface ICardViewProps {
    data: ICompleteData;
    action?: string;
    order?: string;
}



const CardView: React.FC<ICardViewProps> = (props) => {
    const { data, action, order } = props;

    const [cardData, setCardData] = useState<IGroupedPriority>();

    useEffect(() => {
        if (action) {
            switch (action) {
                case 'priority':
                    let priorityData = filterByPriority(data.tickets);
                    setCardData(priorityData);
                    break;
                case 'status':
                    let statusData = filterByStatus(data.tickets);
                    setCardData(statusData);
                    break;
                case 'user':
                    let userData = filterByUser(data.tickets);
                    setCardData(userData);
                    break;
                default:
                    break;
            }
        }
    }, [data, action]);

    return (
        <section className='grid w-full h-full min-h-screen grid-cols-3 gap-4 p-4 bg-gray-200 lg:grid-cols-5'>
            {Object.keys(cardData || {}).map((key, id: number) => {
                return (
                    <div>
                        <h1 className='my-2 text-sm font-semibold'>{action == "user" ? data.users[id].name : key}{action == "priority" && id}</h1>
                        {order === "title" ? cardData![key].sort((a, b) => {
                            if (a.title < b.title) { return -1; }
                            else { return 1; }
                        }).map((ticket) => {
                            return (
                                <Card data={ticket} />
                            )
                        }) : cardData![key].map((ticket) => {
                            return (
                                <Card data={ticket} />
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}

export default CardView