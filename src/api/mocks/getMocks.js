export const getSubscriptionsMock = () => {
    return new Promise((resolve) => {
        resolve(
            {
                data: {
                    headings: ["", "stores #", "products #", "product requests/mo", "assistance"],
                    subscriptions: [
                    {
                        id: "id1",
                        index: 0,
                        displayName: "Pro",
                        pricePoints: {
                            yearly: '$1490',
                            monthly: '$149'
                        },
                        displayFeatures: [
                            {
                                index: 0,
                                displayName: "stores #",
                                value: "5"
                            },
                            {
                                index: 1,
                                displayName: "products #",
                                value: "Unlimited"
                            },
                            {
                                index: 2,
                                displayName: "product requests /mo",
                                value: "20"
                            },
                            {
                                index: 3,
                                displayName: "assistance",
                                value: "Merchant Success Manager"
                            },
                        ],
                        featured: true,
                        isTrialAvailable: true
                    },
                    {
                        id: "id2",
                        index: 1,
                        displayName: "Startup",
                        pricePoints: {
                            yearly: '$190',
                            monthly: '$19'
                        },
                        displayFeatures: [
                            {
                                index: 0,
                                displayName: "stores #",
                                value: "1"
                            },
                            {
                                index: 1,
                                displayName: "products #",
                                value: "10"
                            },
                            {
                                index: 2,
                                displayName: "products requests /mo",
                                value: "4"
                            },
                            {
                                index: 3,
                                displayName: "assistance",
                                value: "Help Center"
                            },
                        ],
                        featured: true,
                        isTrialAvailable: true
                    },
                    {
                        id: "id3",
                        index: 2,
                        displayName: "Traction",
                        pricePoints: {
                            yearly: '$490',
                            monthly: '$49'
                        },
                        displayFeatures: [
                            {
                                index: 0,
                                displayName: "stores #",
                                value: "1"
                            },
                            {
                                index: 1,
                                displayName: "products #",
                                value: "Unlimited"
                            },
                            {
                                index: 2,
                                displayName: "products requests /mo",
                                value: "8"
                            },
                            {
                                index: 3,
                                displayName: "assistance",
                                value: "Support Chat"
                            },
                        ],
                        featured: true,
                        isTrialAvailable: true
                    },
                    {
                        id: "id4",
                        index: 3,
                        displayName: "Platinum",
                        pricePoints: {
                            yearly: '$2490',
                            monthly: '$249'
                        },
                        displayFeatures: [
                            {
                                index: 0,
                                displayName: "stores #",
                                value: "10"
                            },
                            {
                                index: 1,
                                displayName: "products #",
                                value: "Unlimited"
                            },
                            {
                                index: 2,
                                displayName: "products requests /mo",
                                value: "35"
                            },
                            {
                                index: 3,
                                displayName: "assistance",
                                value: "Merchant Success Manager"
                            },
                        ],
                        featured: true,
                        isTrialAvailable: true
                    }
                ]
            }
            }
        )
    })
}