export interface GetAccountStatementAPIResponseModel {
  balance: {
    total_balance: string;
    monthly_payment_limit: number;
    payment_done_so_far: number;
    payment_done_percentage: number;
  };
  money_statistics: {
    total_income: {
      value: number;
      trend: number;
      trend_color: string;
    };
    total_expense: {
      value: number;
      trend: number;
      trend_color: string;
    };
    total_investment: {
      value: number;
      trend: number;
      trend_color: string;
    }
  };
  transactions: {
    id: string;
    date: Date;
    name: string;
    status: string;
    type: string;
    amount: number;
  }[]
}
