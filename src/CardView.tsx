import React, { useEffect, useReducer, useState } from 'react'
import Card from './common/Card'
import { ICompleteData, IGroupedPriority, IGroupedUser, IUser } from './IData';
import { filterByPriority, filterByStatus, filterByUser, mapUser } from './Functions/DataModulation';

interface ICardViewProps {
    data: ICompleteData;
    action?: string;
    order?: string;
}



const CardView: React.FC<ICardViewProps> = (props) => {
    const { data, action, order } = props;

    const [cardData, setCardData] = useState<IGroupedPriority>();
    const [userData, setUserData] = useState<IGroupedUser>();

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
        if (data.users) {
            let userData = mapUser(data.users);
            setUserData(userData);
        }

    }, [data, action]);

    return (
        <section className='grid w-full min-h-screen grid-cols-3 gap-4 p-4 bg-gray-100 lg:grid-cols-5'>
            {Object.keys(cardData || {}).map((key, id: number) => {
                return (
                    <div>
                        <h1 className='my-2 text-lg font-semibold text-gray-600'>{action == "user" ? data.users[id].name : key} <span className='ml-4 text-gray-400'>{cardData![key].length}</span></h1>
                        {order === "title" ? cardData![key].sort((a, b) => {
                            if (a.title < b.title) { return -1; }
                            else { return 1; }
                        }).map((ticket) => {
                            return (
                                <Card data={ticket} user={userData[ticket.userId] as IGroupedUser} />
                            )
                        }) : cardData![key].sort((a, b) => a.priority - b.priority).map((ticket) => {
                            return (
                                <Card data={ticket} user={userData[ticket.userId] as IGroupedUser} />
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}

export default CardView