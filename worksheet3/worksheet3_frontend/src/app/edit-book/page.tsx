"use client";

import UpdateBookInfo from "@/components/UpdateBookInfo";
import { useParams } from "next/navigation";

export default function EditBook() {
  const { id } = useParams();
  
  return (
    <main>
      <UpdateBookInfo bookId={id} />
    </main>
  );
}
