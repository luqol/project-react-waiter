
const adjustAmountPeople = (number, maxAmount = 10, minAmount = 0) => {
    if (number < minAmount) {
      number = minAmount;
    } else if (number > maxAmount) {
      number = maxAmount;
    }
    return number ;
};

export default adjustAmountPeople;