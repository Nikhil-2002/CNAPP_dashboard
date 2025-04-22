const initialData = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'cloud-accounts', name: 'Cloud Accounts', text: '2 Total\nConnected (2)\nNot Connected (2)' },
        { id: 'cloud-risk', name: 'Cloud Account Risk Assessment', text: '9659 Total\nFailed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)' },
      ],
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [],
    },
    {
      id: 'registry',
      name: 'Registry Scan',
      widgets: [
        { id: 'risk-assessment', name: 'Image Risk Assessment', text: '1470 Total Vulnerabilities\nCritical (9)\nHigh (150)' },
        { id: 'security-issues', name: 'Image Security Issues', text: '2 Total Images\nCritical (2)\nHigh (2)' },
      ],
    },
  ],
};

export default initialData;
