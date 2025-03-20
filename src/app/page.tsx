import Image from "next/image";
import PricingList from "./components/pricings";

export default function Home() {
  return (
    <div className="section-container">
      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start main-section">
        <div className="flex flex-col m-auto items-center gap-6 bg-neutral-200 bg-opacity-60 p-8 rounded-xl">
          <Image src="/logo-white.png" alt="test" width={60} height={40} />
          <h3 className="text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </div>
      </section>
      <section className="text-black">
        <div className="section-content">
          <h2 className="text-2xl mb-4">Le salon</h2>
          <div className="flex">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque mauris sem, auctor sit amet auctor sit amet, pretium
              in mauris. In eget ipsum sed eros accumsan maximus. Aenean blandit
              lorem aliquet pretium sollicitudin. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Nullam
              nec eros non purus varius euismod.
              <br />
              <br />
              <br />
              Etiam sit amet massa et tellus interdum finibus sed in tortor. In
              viverra mollis sem, eget egestas turpis commodo sit amet. Praesent
              sit amet hendrerit nisi, vitae sollicitudin sem.
            </p>
            <Image src="/emilie.png" alt="test" width={250} height={250} />
          </div>
        </div>
      </section>
      <section className="text-white bg-black">
        <div className="section-content">
          <h2 className="text-2xl mb-4">Tarifs</h2>
          <PricingList/>
        </div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
}
