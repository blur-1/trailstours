import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface SpotProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Spot = ({ backgroundImage, title, subtitle, peopleJoined }: SpotProps) => {
  return (
    <div className={`relative h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat bg-center lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 z-10 lg:rounded-r-5xl 2xl:rounded-5xl"></div>

     <div className="relative z-20 flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-orange-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
     <div className="hidden lg:block absolute bottom-0 right-0 z-30  lg:rounded-l-lg  lg:rounded-br-5xl 2xl:rounded-br-5xl overflow-hidden">
        <div className="relative bg-orange-50 p-8 lg:max-w-[500px] w-full overflow-hidden ">
          <h2 className="regular-24 md:regular-32  capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14  mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="Spot-2"
            width={186}
            height={219}
            className="spot-quote"
          />
        </div>
      </div>
    </div>
  )
}

const TopSpots = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Spot
          backgroundImage="bg-bg-img-1"
          title="Rome, Italy"
          subtitle="Colosseum tour"
          peopleJoined="25+ Booked"
        />
        <Spot
          backgroundImage="bg-bg-img-2"
          title="Desert of Dubai"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="25+ Booked"
        />
      </div>

      
    </section>
  )
}

export default TopSpots