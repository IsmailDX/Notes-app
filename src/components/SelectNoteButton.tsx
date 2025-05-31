"use client";

import useNote from "@/hooks/useNote";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarMenuButton } from "./ui/sidebar";
import Link from "next/link";

type Note = {
  id: string;
  text: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
};

type Props = {
  note: Note;
};

const SelectNoteButton = ({ note }: Props) => {
  const noteId = useSearchParams().get("noteId") || "";

  const { noteText: selectedNotetext } = useNote();
  const [shouldUseGlobalNoteText, setShouldUseGlobalNoteText] = useState(false);
  const [localNoteText, setLocalNoteText] = useState(note.text);

  useEffect(() => {
    if (noteId === note.id) {
      setShouldUseGlobalNoteText(true);
    } else {
      setShouldUseGlobalNoteText(false);
    }
  }, [noteId, note.id]);

  useEffect(() => {
    if (shouldUseGlobalNoteText) {
      setLocalNoteText(selectedNotetext);
    }
  }, [shouldUseGlobalNoteText, selectedNotetext]);

  const blankNoteText = "EMPTY NOTE";

  let notetext = localNoteText || blankNoteText;

  if (shouldUseGlobalNoteText) {
    notetext = selectedNotetext || blankNoteText;
  }

  return (
    <SidebarMenuButton
      asChild
      className={`items-start gap-0 pr-12 ${note.id === noteId && "bg-sidebar-accent/50"}`}
    >
      <Link href={`/?noteId=${note.id}`} className="flex h-fit flex-col">
        <p className="w-full truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {notetext}
        </p>
        <p>{note.updatedAt.toLocaleDateString()}</p>
      </Link>
    </SidebarMenuButton>
  );
};

export default SelectNoteButton;
