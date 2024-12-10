import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const id = params.cabinId;
  const cabin = await getCabin(id);
  return { title: `Cabin ${cabin?.name}` };
}

// This line will not work here, becuse this page this staticallyt generated.
// export const revalidate = 15;

//If we build this project, these ids will be static generate.
export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // console.log(ids);
  return ids;
}

export default async function Page({ params }) {
  const id = params.cabinId;
  const cabin = await getCabin(id);

  if (!cabin) return null;

  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
