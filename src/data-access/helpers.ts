import { Page } from './types';

const pageDataMap = {
  [Page.FEED]: '/api/feed',
  [Page.POST_DETAIL]: '/api/post-detail',
  [Page.PROFILE]: '/api/profile',
};

export async function getPageData({
  page,
  params,
  options,
}: {
  page: Page;
  params?: string;
  options?: RequestInit;
}) {
  const url = process.env.APP_URL + pageDataMap[page] + (params ?? '');
  const res = await fetch(url, {
    ...options,
  });

  if (!res.ok) {
    throw new Error('failed to fetch data');
  }

  return res.json();
}
