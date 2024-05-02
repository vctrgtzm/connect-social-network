import PostDetail from '@/components/post-detail/post-detail';
import { getPageData } from '@/data-access/helpers';
import { Page } from '@/data-access/types';

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getPageData({
    page: Page.POST_DETAIL,
    params: `/${params.id}`,
  });

  return <PostDetail post={data} />;
}
