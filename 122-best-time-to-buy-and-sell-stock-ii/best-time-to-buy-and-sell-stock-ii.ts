function maxProfit(prices: number[]): number {
    let n: number = prices.length;
    let profit: number = 0;
    for (let i: number = 1; i < n; i++) {
        if (prices[i] > prices[i - 1]) profit += (prices[i] - prices[i - 1]);
    }
    return profit;
};