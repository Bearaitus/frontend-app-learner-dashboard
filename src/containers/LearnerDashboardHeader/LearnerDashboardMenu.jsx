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
      href: '/',
      content: 'Мои курсы',
      isActive: true,
    },
    ...(getConfig().ENABLE_PROGRAMS ? [{
      type: 'item',
      href: `${urls.programsUrl()}`,
      content: formatMessage(messages.program),
    }] : []),
    {
      type: 'item',
      href: `${urls.baseAppUrl(courseSearchUrl)}`,
      content: 'Все курсы'
    },
    {
      type: 'item',
      href: `https://help.ptsecurity.com/ru-RU/projects`,
      content: 'PT Help',

    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/pt-esc-threat-intelligence/`,
      content: 'PT ESC Threat Intelligence',

    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/threatscape/`,
      content: 'Threatscape',

    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/analytics/`,
      content: 'Analytics',

    },
    {
      type: 'item',
      href: `https://mitre.ptsecurity.com/ru-RU`,
      content: 'MITRE ATT&CK',

    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/hacker-groups/`,
      content: 'Hacker Groups',

    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/analytics/`,
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
          content: 'Выход',
        },
      ],
    },
  ],
}
);

export default getLearnerHeaderMenu;
