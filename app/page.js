import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import FaqSection from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import MediaShowcaseSection from "@/components/MediaShowcaseSection";
import MoreAboutProjectSection from "@/components/MoreAboutProjectSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <ProjectHighlights/>
    <PriceListSection/>
    <FloorPlanSection/>
    <MasterPlanSection/>
    <AmenitiesSection/>
    <GallerySection/>
    <MediaShowcaseSection/>
    <LocationSection/>
    <MoreAboutProjectSection/>
    <FaqSection/>
    <BlogSection/>
    </>
  );
}
