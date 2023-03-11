import { JobDetailCard } from '@components';
import PostTemplate from '@templates/Post.template';

import Experiences from '@data/Experiences';

export default function HomePage() {
  return (
    <PostTemplate>
      {Experiences.map((jobCardData: any, index: number) => (
        <JobDetailCard key={index} {...jobCardData} />
      ))}
    </PostTemplate>
  );
}
