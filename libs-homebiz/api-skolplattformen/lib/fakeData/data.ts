import {fourDaysAgo, oneDayAgo} from './dates';

import {
  CalendarItem,
  Child,
  Notification,
  ScheduleItem,
  User,
} from '../../../../libs/api/lib';
import {oneDayForward, oneWeekForward, twoDaysForward} from './dates';

const data: any = {
  '39b59e-bf4b9f-f68ac25321-977218-bf0': {
    calendar: [
      {
        title: 'Terminslut',
        id: 73,
        description: null,
        location: null,
        startDate: '2020-12-18',
        endDate: '2020-12-18',
        allDay: true,
      },
      {
        title: 'Terminen börjar',
        id: 74,
        description: null,
        location: null,
        startDate: '2021-01-12',
        endDate: '2021-01-12',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 75,
        description: null,
        location: null,
        startDate: '2021-01-21',
        endDate: '2021-01-21',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 76,
        description: null,
        location: null,
        startDate: '2021-02-04',
        endDate: '2021-02-04',
        allDay: true,
      },
      {
        title: 'Vänliga veckan',
        id: 77,
        description: null,
        location: null,
        startDate: '2021-02-08',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 79,
        description: null,
        location: null,
        startDate: '2021-02-09',
        endDate: '2021-02-09',
        allDay: true,
      },
      {
        title: 'Trygghetsdag',
        id: 78,
        description: null,
        location: null,
        startDate: '2021-02-12',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'APT fritids stänger 15:45',
        id: 80,
        description: null,
        location: null,
        startDate: '2021-02-25',
        endDate: '2021-02-25',
        allDay: true,
      },
      {
        title: 'Sportlov',
        id: 81,
        description: null,
        location: null,
        startDate: '2021-03-01',
        endDate: '2021-03-05',
        allDay: true,
      },
      {
        title: 'Studiedag',
        id: 82,
        description: null,
        location: null,
        startDate: oneWeekForward.startOf('day').toISODate(),
        endDate: oneWeekForward.endOf('day').toISODate(),
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 83,
        description: null,
        location: null,
        startDate: '2021-04-01',
        endDate: '2021-04-01',
        allDay: true,
      },
      {
        title: 'Långfredag',
        id: 84,
        description: null,
        location: null,
        startDate: '2021-04-02',
        endDate: '2021-04-02',
        allDay: true,
      },
      {
        title: 'Påsklov',
        id: 85,
        description: null,
        location: null,
        startDate: '2021-04-05',
        endDate: '2021-04-09',
        allDay: true,
      },
      {
        title: 'Föräldraråd',
        id: 86,
        description: null,
        location: null,
        startDate: '2021-04-20',
        endDate: '2021-04-20',
        allDay: true,
      },
      {
        title: 'Prao åk 8',
        id: 97,
        description: null,
        location: null,
        startDate: '2021-04-26',
        endDate: '2021-05-12',
        allDay: true,
      },
      {
        title: 'Kristi Himmelfärd',
        id: 87,
        description: null,
        location: null,
        startDate: '2021-05-13',
        endDate: '2021-05-13',
        allDay: true,
      },
      {
        title: 'Lov',
        id: 88,
        description: null,
        location: null,
        startDate: '2021-05-14',
        endDate: '2021-05-14',
        allDay: true,
      },
      {
        title: 'APT Fritids stänger 15:45',
        id: 90,
        description: null,
        location: null,
        startDate: '2021-05-20',
        endDate: '2021-05-20',
        allDay: true,
      },
      {
        title: 'Läsårsslut',
        id: 91,
        description:
          "<html><head><style>\r\np.MsoNormal, li.MsoNormal, div.MsoNormal {\nmargin:0cm;\nmargin-bottom:.0001pt;\nfont-size:11.0pt;\nfont-family:'Calibri',sans-serif;\n}\n\na:link, span.MsoHyperlink {\ncolor:#0563C1;\ntext-decoration:underline;\n}\n\nspan.MsoHyperlinkFollowed {\ncolor:#954F72;\ntext-decoration:underline;\n}\n\nspan.E-postmall17 {\nfont-family:'Calibri',sans-serif;\ncolor:windowtext;\n}\n\n.MsoChpDefault {\nfont-family:'Calibri',sans-serif;\n}\n\ndiv.WordSection1 {\n}\n\r\n</style></head><body lang='SV' link='#0563C1' vlink='#954F72' style=''><div class='WordSection1'><p class='MsoNormal'>&#160;</p></div></body></html>",
        location: null,
        startDate: '2021-06-11',
        endDate: '2021-06-11',
        allDay: true,
      },
      {
        title: 'Fritids stängt',
        id: 92,
        description:
          "<html><head><style>\r\np.MsoNormal, li.MsoNormal, div.MsoNormal {\nmargin:0cm;\nmargin-bottom:.0001pt;\nfont-size:11.0pt;\nfont-family:'Calibri',sans-serif;\n}\n\na:link, span.MsoHyperlink {\ncolor:#0563C1;\ntext-decoration:underline;\n}\n\nspan.MsoHyperlinkFollowed {\ncolor:#954F72;\ntext-decoration:underline;\n}\n\nspan.E-postmall17 {\nfont-family:'Calibri',sans-serif;\ncolor:windowtext;\n}\n\n.MsoChpDefault {\nfont-family:'Calibri',sans-serif;\n}\n\ndiv.WordSection1 {\n}\n\r\n</style></head><body lang='SV' link='#0563C1' vlink='#954F72' style=''><div class='WordSection1'><p class='MsoNormal'>&#160;</p></div></body></html>",
        location: null,
        startDate: '2021-06-14',
        endDate: '2021-06-14',
        allDay: true,
      },
    ],
    schedule: [
      {
        title: 'Läsläxan tillbaka',
        description: 'Ta med boken tillbaka till skolan',
        location: '',
        allDayEvent: false,
        startDate: oneDayForward.startOf('day').toISO(),
        endDate: oneDayForward.endOf('day').toISO(),
        oneDayEvent: true,
      } as ScheduleItem,
    ],
    notifications: [
      {
        id: 'bfe19b-766db3-b38d99d321-bbed3d-506',
        sender: 'Planering och Bedömning',
        dateCreated: oneDayAgo.minus({months: 6}).toISO(),
        dateModified: fourDaysAgo.toISO(),
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://www.breakit.se/artikel/21423/har-ar-it-bolaget-bakom-haveriet-pa-skolplattformen',
        category: 'Lärlogg',
        type: 'avisering',
      },
      {
        id: '9025f9-a1e685-d7c4668f09-e14bc5-0ab',
        sender: 'Elevdokumentation',
        dateCreated: '2020-12-10T14:31:29.966Z',
        message:
          'Nu kan du ta del av ditt barns dokumentation av utvecklingssamtal',
        url: 'https://www.breakit.se/artikel/21404/kodaren-slog-larm-nu-akutstoppas-skolplattformen-i-stockholm',
        category: null,
        type: 'webnotify',
      },
      {
        id: 'a24061-1c9a4e-83dc479d7c-f44fe9-376',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-06-10T12:18:00.000Z',
        message: 'Nu finns det en bedömning att titta på.',
        url: 'https://www.svt.se/nyheter/lokalt/stockholm/skolplattformen-i-stockholm-beratta-om-era-erfarenheter',
        category: 'Bedömning',
        type: 'avisering',
      },
      {
        id: '79d65c-1f8240-35c94296ec-9f4bdc-cea',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-03-24T14:28:00.000Z',
        message: 'Nu finns det en bedömning att titta på.',
        url: 'https://www.breakit.se/artikel/18120/skolplattformen-kostade-700-miljoner-strid-med-entreprenor-om-varumarket',
        category: 'Bedömning',
        type: 'avisering',
      },
      {
        id: '9c5b7b-52c16d-b9fc2e8248-e4de76-279',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-03-24T13:48:00.000Z',
        message: 'Nu finns det en bedömning att titta på.',
        url: 'https://www.mitti.se/nyheter/forskolans-tur-att-fa-kritiserade-skolplattformen-app/lmsau!5338007/',
        category: 'Bedömning',
        type: 'avisering',
      },
    ],
  },
  'eea96a-a3e045-caab589391-ed7d17-029': {
    calendar: [
      {
        title: 'Terminslut',
        id: 73,
        description: null,
        location: null,
        startDate: '2020-12-18',
        endDate: '2020-12-18',
        allDay: true,
      },
      {
        title: 'Terminen börjar',
        id: 74,
        description: null,
        location: null,
        startDate: '2021-01-12',
        endDate: '2021-01-12',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 75,
        description: null,
        location: null,
        startDate: oneWeekForward.startOf('day').toISODate(),
        endDate: oneWeekForward.endOf('day').toISODate(),
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 76,
        description: null,
        location: null,
        startDate: '2021-02-04',
        endDate: '2021-02-04',
        allDay: true,
      },
      {
        title: 'Vänliga veckan',
        id: 77,
        description: null,
        location: null,
        startDate: '2021-02-08',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 79,
        description: null,
        location: null,
        startDate: '2021-02-09',
        endDate: '2021-02-09',
        allDay: true,
      },
      {
        title: 'Trygghetsdag',
        id: 78,
        description: null,
        location: null,
        startDate: '2021-02-12',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'APT fritids stänger 15:45',
        id: 80,
        description: null,
        location: null,
        startDate: '2021-02-25',
        endDate: '2021-02-25',
        allDay: true,
      },
      {
        title: 'Sportlov',
        id: 81,
        description: null,
        location: null,
        startDate: '2021-03-01',
        endDate: '2021-03-05',
        allDay: true,
      },
      {
        title: 'Studiedag',
        id: 82,
        description: null,
        location: null,
        startDate: '2021-03-22',
        endDate: '2021-03-22',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 83,
        description: null,
        location: null,
        startDate: '2021-04-01',
        endDate: '2021-04-01',
        allDay: true,
      },
      {
        title: 'Långfredag',
        id: 84,
        description: null,
        location: null,
        startDate: '2021-04-02',
        endDate: '2021-04-02',
        allDay: true,
      },
      {
        title: 'Påsklov',
        id: 85,
        description: null,
        location: null,
        startDate: '2021-04-05',
        endDate: '2021-04-09',
        allDay: true,
      },
      {
        title: 'Föräldraråd',
        id: 86,
        description: null,
        location: null,
        startDate: '2021-04-20',
        endDate: '2021-04-20',
        allDay: true,
      },
      {
        title: 'Prao åk 8',
        id: 97,
        description: null,
        location: null,
        startDate: '2021-04-26',
        endDate: '2021-05-12',
        allDay: true,
      },
      {
        title: 'Kristi Himmelfärd',
        id: 87,
        description: null,
        location: null,
        startDate: '2021-05-13',
        endDate: '2021-05-13',
        allDay: true,
      },
      {
        title: 'Lov',
        id: 88,
        description: null,
        location: null,
        startDate: '2021-05-14',
        endDate: '2021-05-14',
        allDay: true,
      },
      {
        title: 'APT Fritids stänger 15:45',
        id: 90,
        description: null,
        location: null,
        startDate: '2021-05-20',
        endDate: '2021-05-20',
        allDay: true,
      },
    ],
    schedule: [
      {
        title: 'Läxförhör franska',
        description: 'Läxförhör, glosor samt verben!',
        location: 'Klassrummet',
        allDayEvent: false,
        startDate: twoDaysForward.startOf('day').toISO(),
        endDate: twoDaysForward.endOf('day').toISO(),
        oneDayEvent: false,
      } as ScheduleItem,
    ],
    notifications: [
      {
        id: 'e1b5bc-597fa8-5511794939-3614e1-615',
        sender: 'Planering och Bedömning',
        dateCreated: fourDaysAgo.toISO(),
        dateModified: fourDaysAgo.toISO(),
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://www.mitti.se/nyheter/rekorddyr-skolplattform-kostar-258-miljoner-till/lmsao!5381301/',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: '7dbc20-bfa1ac-e20171b865-82c1f7-f3c',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-12-01T12:43:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://computersweden.idg.se/2.2683/1.722561/lacka-skolplattformen-datainspektionen',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: 'a6829b-ecf912-b71582e8fb-b6dc14-f60',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-11-24T13:34:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://www.dagensarena.se/redaktionen/en-systemkramare-ger-upp/',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: '3cedb4-767d24-8ccd6ac3ac-c05cb7-a3a',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-11-16T13:24:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://www.breakit.se/artikel/27075/skolplattformen-kostade-1-miljard-att-bygga-nu-tvingas-stockholm-bota',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: '6ace13-5f99da-d1d50ac7a6-4a6108-d8e',
        sender: 'Planering och Bedömning',
        dateCreated: '2020-11-12T13:27:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://www.nyteknik.se/sakerhet/ygeman-om-datalackan-i-skolplattformen-det-ar-upprorande-6968853',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
    ],
  },
};

export const user = (): User => ({
  personalNumber: '195001182046', // Test personal number from Skatteverket
  firstName: 'Namn',
  lastName: 'Namnsson',
  isAuthenticated: true,
});

export const calendar = (child: Child): CalendarItem[] =>
  data[child.id].calendar;

export const schedule = (child: Child): ScheduleItem[] =>
  data[child.id].schedule;

export const notifications = (child: Child): Notification[] =>
  data[child.id].notifications;
