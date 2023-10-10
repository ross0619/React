import './NavigationHeader.css';
import Link from 'next/link'

export default function NavigationHeader(){
    return (
      <div className='header'>
        <ul>
          <li><Link href={"/"} className='active'>Ross Inc.</Link></li>
          <li><Link href={"/Table"}>Movies</Link></li>
          <li><Link href={"/VertBarChart"}>Vertical Bar Chart</Link></li>
          <li><Link href={"/DoughnutChart"}>Doughnut Chart</Link></li>
        </ul>
      </div>
    );
  }