"use client"

import PageBackground from "../../components/pageBackground";
import ListSchedule from "@/app/components/listSchedule";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Schedule() {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  const searchParams = useSearchParams()
  const searchParamsDay = searchParams.get('day')

  return (
    <section>
      <PageBackground name="Schedule" />
      <section className="w-full p-6 py-16">
        <div className="flex justify-center items-center gap-4 mb-[60px]">
          {days.map((day, index) => (
            <Link href={`?day=${day}`} key={index}
              className={`p-2 px-5 ${searchParamsDay === day ? "bg-red text-white" : "bg-white text-red"} border border-red transition hover:bg-red hover:text-white font-medium rounded-full inline-block`}
            >{day.charAt(0).toUpperCase() + day.slice(1)}</Link>
          ))}
        </div>

        {searchParamsDay === "monday" &&
          <>
            <ListSchedule nameClass="Cardio Blast"
              time="7:00 AM - 8:00 AM"
              trainer="Sarah Anderson" />
            <ListSchedule nameClass="Zumba Party"
              time="11:00 AM - 12:00 PM"
              trainer="Maria Rodriguez" />
          </>
        }
        {searchParamsDay === "sunday" &&
          <>
            <ListSchedule nameClass="Mindful Meditation"
              time="8:00 AM - 9:00 AM"
              trainer="block lesnarJessica Lee" />
            <ListSchedule nameClass="Zumba Party"
              time="11:00 AM - 12:00 PM"
              trainer="Maria Rodriguez" />
          </>
        }
        {searchParamsDay === "tuesday" &&
          <>
            <ListSchedule nameClass="Mindful Meditation"
              time="8:00 AM - 9:00 AM"
              trainer="block lesnarJessica Lee" />
            <ListSchedule nameClass="Powerlifting Basic"
              time="5:30 PM - 7:00 PM"
              trainer="Mike Johnson" />
          </>
        }
        {searchParamsDay === "wednesday" &&
          <ListSchedule nameClass="Bodyweight Bootcamp"
            time="6:00 AM - 7:30 AM"
            trainer="Ryan Turner" />}
        {searchParamsDay === "thursday" &&
          <ListSchedule nameClass="Pilates Core"
            time="7:30 AM - 9:00 AM"
            trainer="Daniel Harris" />}
        {searchParamsDay === "friday" &&
          <ListSchedule nameClass="Spin Cycle"
            time="5:00 PM - 7:00 PM; Saturday, 9:00"
            trainer="Jason Taylor" />}
        {searchParamsDay === "saturday" &&
          <ListSchedule nameClass="Zumba Party"
            time="11:00 AM - 12:00 PM"
            trainer="Maria Rodriguez" />}
      </section>
    </section>
  )
}