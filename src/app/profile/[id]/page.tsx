import Profile from '@/components/profile/profile';
import { getPageData } from '@/data-access/helpers';
import { Page } from '@/data-access/types';

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getPageData({
    page: Page.PROFILE,
    params: `/${params.id}`,
  });

  return <Profile user={data} />;
}
