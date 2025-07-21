import { getConfig } from '@edx/frontend-platform';

import urls from 'data/services/lms/urls';

import messages from './messages';

const getLearnerHeaderMenu = (
  formatMessage,
  courseSearchUrl,
  authenticatedUser,
  exploreCoursesClick,
) => ({
  mainMenu: [
    {
      type: 'item',
      href: `${urls.baseAppUrl(courseSearchUrl)}`,
      content: 'All courses'
    },
    {
      type: 'item',
      href: `https://help.ptsecurity.com/en-US/projects`,
      content: 'PT Help',

    },
    {
      type: 'item',
      href: `https://dbugs.ptsecurity.com/`,
      content: 'dbugs',

    },
    {
      type: 'item',
      href: `https://global.ptsecurity.com/en/research/threatscape/`,
      content: 'Threatscape',

    },
    {
      type: 'item',
      href: `https://global.ptsecurity.com/en/research/analytics/`,
      content: 'Analytics',

    },
    {
      type: 'item',
      href: `https://mitre.ptsecurity.com/en-US`,
      content: 'MITRE ATT&CK',

    },
    {
      type: 'item',
      href: `https://global.ptsecurity.com/en/research/hacker-groups/`,
      content: 'Hacker Groups',

    },
    {
      type: 'item',
      href: `https://global.ptsecurity.com/en/research/analytics//`,
      content: 'Positive Research',

    },
    {
      type: 'item',
      href: `https://edu.ptsecurity.com/pt_edtechlab`,
      content: 'PT EdTechLab',

    },
  ],
  secondaryMenu: [
    ...(getConfig().SUPPORT_URL ? [{
      type: 'item',
      href: `${getConfig().SUPPORT_URL}`,
      content: formatMessage(messages.help),
    }] : []),
  ],
  userMenu: [
    {
      heading: '',
      items: [
        {
          type: 'item',
          href: `${getConfig().LOGOUT_URL}`,
          content: 'Logout',
        },
      ],
    },
  ],
}
);

export default getLearnerHeaderMenu;
