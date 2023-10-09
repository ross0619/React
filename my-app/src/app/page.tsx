import Image from 'next/image'
import { text } from 'stream/consumers'
import NavigationHeader from '../components/NavigationHeader/NavigationHeader';
import VertbarChart from '../components/vertBarChart/vertBarChart'
import DoughNutChart from '@/components/DoughnutChart/Doughnut';
import Profile from '@/components/Profile/Profile'


const user = {
  name: 'Aaron Ross',
  imageUrl: 'aaron.jpg',
  imageSize: 90,
};


export default function Home() {

  return (
    <>
    <main>
      <Profile />
      {/* <DoughNutChart /> */}
    </main>
    </>

  )
}

