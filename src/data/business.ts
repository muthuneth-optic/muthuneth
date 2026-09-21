export interface BusinessBranch {
    name: string;
    address: string;
}

export const business = {
    name: "Muthuneth Opticals",
    logo: "/images/brand/muthuneth-logo.jpeg",

    phones: {
        primary: "+94 77 575 8222",
        secondary: "+94 72 575 8222",
    },
    whatsapp: "94775758222",

    hours: {
        open: "9:00 AM",
        close: "5:00 PM",
    },

    branches: [
        {
            name: "Main Branch",
            address: "Opposite Hospital, Hiripitiya",
        },
        {
            name: "Branch",
            address: "Hakmana Road, Thihagoda",
        },
    ] satisfies BusinessBranch[],

    social: {
        facebook: "https://share.google/xOFUvwpAt3WOlpH3b",
    },
} as const;