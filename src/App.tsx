import { useEffect, useState } from 'react'
import DropDown from './common/DropDown'
import axios from 'axios';
import { ICompleteData, ITicket, IUser } from './IData';
import { filterByPriority, filterByStatus } from './Functions/DataModulation';
import CardView from './CardView';



function App() {
  const [tickets, setTickets] = useState<ITicket[]>([])
  const [users, setUsers] = useState<IUser[]>([]);
  const [completeData, setCompleteData] = useState<ICompleteData>({});
  const [group, setGroup] = useState<string>('');
  const [order, setOrder] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await axios.get('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers')
      if (status === 200) {
        console.log(data)
        setCompleteData(data);
        setTickets(data.tickets);
        setUsers(data.users);
      } else {
        console.error('Error')
      }
    }
    fetchData()
  }
    , []);

  return (
    <main className='w-full h-full min-h-screen'>
      <div className='p-4'>
        <DropDown order={order} group={group} setGroup={setGroup} setOrder={setOrder} />
      </div>
        <CardView data={completeData} action={group || 'priority'} order={order} />
    </main>
  )
}

export default App
