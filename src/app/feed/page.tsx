import Feed from '@/components/feed/feed';
import { getPageData } from '@/data-access/helpers';
import { Page } from '@/data-access/types';

export default async function FeedPage() {
  const data = await getPageData({ page: Page.FEED });

  return <Feed feedData={data.data} />;
}
