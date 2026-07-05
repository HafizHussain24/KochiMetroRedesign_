// Fares matrix based on Zones
export const FARES = {
  matrix: {
    1: { 1: 10, 2: 20, 3: 30, 4: 40, 5: 50 },
    2: { 1: 20, 2: 10, 3: 20, 4: 30, 5: 40 },
    3: { 1: 30, 2: 20, 3: 10, 4: 20, 5: 30 },
    4: { 1: 40, 2: 30, 3: 20, 4: 10, 5: 20 },
    5: { 1: 50, 2: 40, 3: 30, 4: 20, 5: 10 }
  },
  discounts: {
    smartCard: 0.10, // 10% discount
    seniorCitizen: 0.15, // 15% discount (requires smart card)
    groupBooking: 0.15 // 15% discount for 20+ people
  },
  passes: [
    { name: 'Student Pass', price: 200, validity: '1 Month', note: 'Valid Mon-Fri' },
    { name: 'Tourist Day Pass', price: 150, validity: '1 Day', note: 'Unlimited travel' }
  ]
};
