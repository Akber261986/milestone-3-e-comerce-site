
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catagory from '@/components/Catagories';
import PeopleComments from '@/components/PeopleComments';

export default function HomePage() {

  return (
    <div className='flex flex-col items-center justify-center'>
      <Hero />
      <About/>
      <Catagory/>
      <PeopleComments/>
    </div>
  );
}
