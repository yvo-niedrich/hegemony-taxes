export default {
    header: {
        multiplier: 'Tax Multiplier',
        workingclass: 'Working Class',
        middleclass: 'Middle Class',
        capitalist: 'Capitalist Class',
    },
    taxes: {
        income: 'Income Tax',
        corporate: 'Corporate Tax',
        employment: 'Employment Tax',
    },
    policy: {
        fiscal: 'Fiscal Policy',
        labor: 'Labor Market',
        tax: 'Taxation',
        health: 'Healthcare & Benefits',
        education: 'Education',
        unknown: 'Unknown Policy',
    },
    hint: {
        worker: {
            incomeTax: 'Population Size (the lower number of the population track)',
        },
        middle: {
            incomeTax: 'The number of Companies, other than your own, where you have Workers',
            employmentTax: '**Operational** Companies you own',
        },
        capitalist: {
            corporateTax: 'Gross income - Money in the Revenue area before taxes',
            employmentTax: '**Operational** Companies you own',
        },
    },
};
