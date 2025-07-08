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
      onClick: (e) => {
        exploreCoursesClick(e);
      },
    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/pt-esc-threat-intelligence/`,
      content: 'PT ESC TI',
      onClick: (e) => {
        exploreCoursesClick(e);
      },
    },
    {
      type: 'item',
      href: `https://mitre.ptsecurity.com/ru-RU`,
      content: 'MITRE ATT&CK',
      onClick: (e) => {
        exploreCoursesClick(e);
      },
    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/`,
      content: 'Research',
      onClick: (e) => {
        exploreCoursesClick(e);
      },
    },
    {
      type: 'item',
      href: `https://www.ptsecurity.com/ru-ru/research/analytics/`,
      content: 'Analytics',
      onClick: (e) => {
        exploreCoursesClick(e);
      },
    },
    {
      type: 'item',
      href: `https://edu.ptsecurity.com/pt_edtechlab`,
      content: 'PT EdTechLab',
      onClick: (e) => {
        exploreCoursesClick(e);
      },
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
        ...(getConfig().ORDER_HISTORY_URL ? [{
          type: 'item',
          href: getConfig().ORDER_HISTORY_URL,
          content: formatMessage(messages.orderHistory),
        }] : []),
      ],
    },
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
