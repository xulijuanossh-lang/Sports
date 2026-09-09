/**
 * 运动品类选品小站 - 配置文件
 * ========================================
 * 使用说明：
 * 1. ACCOUNTS: 各机构账号密码，格式为 { username, password, agencyName }
 * 2. AGENCIES: 机构名称列表（用于设置页搜索选择）
 * 3. SITE_CONFIG: 站点全局配置
 * ========================================
 */

// ===== 机构账号列表 =====
const ACCOUNTS = [
  { username: "100001", password: "Sp0rts1A", agencyName: "极速体育传媒" },
  { username: "100002", password: "Ath2eB9k", agencyName: "动感达人工作室" },
  { username: "100003", password: "Run3cD7m", agencyName: "活力运动经纪" }
];

// ===== 机构名称列表 =====
const AGENCIES = [
  "极速体育传媒",
  "动感达人工作室",
  "活力运动经纪"
];

// ===== 站点全局配置 =====
const SITE_CONFIG = {
  siteName: "运动品类选品小站",
  dataFile: "data/products.csv",
  pallets: [
    { key: 'all', name: '全部运动', enabled: true, color: 'green' },
    { key: 'running', name: '跑步专区', enabled: false, color: 'blue' },
    { key: 'gym', name: '健身专区', enabled: false, color: 'orange' },
    { key: 'yoga', name: '瑜伽专区', enabled: false, color: 'purple' }
  ]
};
