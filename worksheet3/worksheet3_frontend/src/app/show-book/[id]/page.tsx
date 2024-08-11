"use client";

import ShowBookDetails from "@/components/ShowBookDetails";
import { useParams } from "next/navigation";

export default function ShowBook() {
  const { id } = useParams();
  
  return (
    <main>
      <ShowBookDetails bookId={id} />
    </main>
  );
}
