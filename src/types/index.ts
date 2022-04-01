export interface Crypto {
  status: Status;
  data: Data;
}

export interface Data {
  id: string;
  serial_id: number;
  symbol: string;
  name: string;
  slug: string;
  contract_addresses: null;
  _internal_temp_agora_id: string;
  market_data: MarketData;
  marketcap: Marketcap;
  supply: Supply;
  blockchain_stats_24_hours: {[key: string]: number | null};
  market_data_liquidity: MarketDataLiquidity;
  all_time_high: AllTimeHigh;
  cycle_low: CycleLow;
  token_sale_stats: TokenSaleStats;
  staking_stats: StakingStats;
  mining_stats: MiningStats;
  developer_activity: DeveloperActivity;
  roi_data: {[key: string]: number};
  roi_by_year: {[key: string]: number};
  risk_metrics: RiskMetrics;
  misc_data: MiscData;
  reddit: Reddit;
  on_chain_data: {[key: string]: number | null};
  exchange_flows: {[key: string]: number};
  miner_flows: MinerFlows;
  supply_activity: {[key: string]: number};
  supply_distribution: {[key: string]: number | null};
  alert_messages: null;
}

export interface AllTimeHigh {
  price: number;
  at: Date;
  days_since: number;
  percent_down: number;
  breakeven_multiple: number;
}

export interface CycleLow {
  price: number;
  at: Date;
  percent_up: number;
  days_since: number;
}

export interface DeveloperActivity {
  stars: number;
  watchers: number;
  commits_last_3_months: null;
  commits_last_1_year: null;
  lines_added_last_3_months: null;
  lines_added_last_1_year: null;
  lines_deleted_last_3_months: null;
  lines_deleted_last_1_year: null;
}

export interface MarketData {
  price_usd: number;
  price_btc: number;
  price_eth: number;
  volume_last_24_hours: number;
  real_volume_last_24_hours: number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_1_hour: number;
  percent_change_btc_last_1_hour: number;
  percent_change_eth_last_1_hour: number;
  percent_change_usd_last_24_hours: number | null;
  percent_change_btc_last_24_hours: number | null;
  percent_change_eth_last_24_hours: number | null;
  ohlcv_last_1_hour: OhlcvLastHour;
  ohlcv_last_24_hour: OhlcvLastHour;
  last_trade_at: Date;
}

export interface OhlcvLastHour {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface MarketDataLiquidity {
  clearing_prices_to_sell: null;
  marketcap: null;
  asset_bid_depth: null;
  usd_bid_depth: null;
  updated_at: Date;
}

export interface Marketcap {
  rank: number;
  marketcap_dominance_percent: number;
  current_marketcap_usd: number;
  y_2050_marketcap_usd: number;
  y_plus10_marketcap_usd: number;
  liquid_marketcap_usd: number;
  volume_turnover_last_24_hours_percent: number;
  realized_marketcap_usd: number;
  outstanding_marketcap_usd: number;
}

export interface MinerFlows {
  supply_1hop_miners_usd: number;
  supply_1hop_miners_native_units: number;
  supply_miners_usd: number;
  supply_miners_native_units: number;
}

export interface MiningStats {
  mining_algo: string;
  network_hash_rate: string;
  available_on_nicehash_percent: number;
  '1_hour_attack_cost': null;
  '24_hours_attack_cost': null;
  attack_appeal: null;
  hash_rate: number;
  hash_rate_30d_average: number;
  mining_revenue_per_hash_usd: number;
  mining_revenue_per_hash_native_units: number;
  mining_revenue_per_hash_per_second_usd: number;
  mining_revenue_per_hash_per_second_native_units: number;
  mining_revenue_from_fees_percent_last_24_hours: number;
  mining_revenue_native: number;
  mining_revenue_usd: null;
  mining_revenue_total: number;
  average_difficulty: number;
}

export interface MiscData {
  private_market_price_usd: null;
  vladimir_club_cost: null;
  btc_current_normalized_supply_price_usd: null;
  btc_y2050_normalized_supply_price_usd: null;
  asset_created_at: null;
  asset_age_days: null;
  categories: string[];
  sectors: string[];
  tags: null;
}

export interface Reddit {
  active_user_count: number;
  subscribers: number;
}

export interface RiskMetrics {
  sharpe_ratios: SharpeRatios;
  volatility_stats: VolatilityStats;
}

export interface SharpeRatios {
  last_30_days: number;
  last_90_days: number;
  last_1_year: number;
  last_3_years: number;
}

export interface VolatilityStats {
  volatility_last_30_days: number;
  volatility_last_90_days: number;
  volatility_last_1_year: number;
  volatility_last_3_years: number;
}

export interface StakingStats {
  staking_type: null;
  staking_yield_percent: null;
  real_staking_yield_percent: null;
  staking_minimum: null;
  tokens_staked: null;
  tokens_staked_percent: null;
  staking_engaged_balance: null;
  staked_total_percent: null;
  staking_options: null;
}

export interface Supply {
  y_2050: number;
  y_plus10: number;
  liquid: number;
  circulating: number;
  y_2050_issued_percent: number;
  annual_inflation_percent: number;
  stock_to_flow: number;
  y_plus10_issued_percent: number;
  supply_revived_90d: number;
}

export interface TokenSaleStats {
  sale_proceeds_usd: null;
  sale_start_date: null;
  sale_end_date: null;
  roi_since_sale_usd_percent: null;
  roi_since_sale_btc_percent: null;
  roi_since_sale_eth_percent: null;
}

export interface Status {
  elapsed: number;
  timestamp: Date;
  error_code: number | undefined;
}
