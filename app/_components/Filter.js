"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex justify-end">
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="all"
      >
        All cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="small"
      >
        1 &mdash; 3 guest
      </Button>
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="medium"
      >
        4 &mdash; 7 guest
      </Button>
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="large"
      >
        8 &mdash;12 guest
      </Button>
    </div>
  );
}

function Button({ children, handleFilter, activeFilter, filter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      } `}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
