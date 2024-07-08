import { SectionHeader } from "../utils/SectionHeader";
import { Posts } from "./components/posts";

export const BlogBody = () => {
  return (
    <>
      <div className='section-wrapper'>
        <SectionHeader title="Blog" dir="l" />
        <Posts />
      </div>
    </>
  );
}