import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsTicker from "@/components/layout/NewsTicker";

import HeroNews from "@/components/homepage/HeroNews";
import LatestNews from "@/components/homepage/LatestNews";
import PakistanNews from "@/components/homepage/PakistanNews";
import PoliticsWorld from "@/components/homepage/PoliticsWorld";
import BusinessEducation from "@/components/homepage/BusinessEducation";
import LawCrimeHealthEnvironment from "@/components/homepage/LawCrimeHealthEnvironment";
import SportsNews from "@/components/homepage/SportsNews";

import CultureHistory from "@/components/homepage/CultureHistory";
import LiteratureFashionMedia from "@/components/homepage/LiteratureFashionMedia";

import IdeasAnalysis from "@/components/homepage/IdeasAnalysis";
import CreativeDesk from "@/components/homepage/CreativeDesk";

import DailyJarida from "@/components/homepage/DailyJarida";
import EditorsPicksMostViewed from "@/components/homepage/EditorsPicksMostViewed";
import PrintEdition from "@/components/homepage/PrintEdition";
import CommunityHub from "@/components/homepage/CommunityHub";

export default function Home() {
  return (
    <>
      <Header />

      <NewsTicker />

      <main>

        {/* FRONT PAGE */}
        <HeroNews />

        {/* NEWSROOM */}
        <LatestNews />
        <PakistanNews />
        <PoliticsWorld />
        <BusinessEducation />
        <LawCrimeHealthEnvironment />
        <SportsNews />

        {/* CULTURE */}
        <CultureHistory />
        <LiteratureFashionMedia />

        {/* IDEAS */}
        <IdeasAnalysis />

        {/* CREATIVE */}
        <CreativeDesk />

        {/* DAILY JARIDA */}
        <DailyJarida />

        {/* EDITORIAL DISCOVERY */}
        <EditorsPicksMostViewed />

        {/* PRINT & MAGAZINE */}
        <PrintEdition />

        {/* COMMUNITY */}
        <CommunityHub />

      </main>

      <Footer />
    </>
  );
}