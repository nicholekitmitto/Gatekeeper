import { FeatureGate } from "./FeatureGate";
import { useFlags } from "../flags/useFlags";
import {
  BarChart3,
  Package,
  Tag,
  FolderOpen,
  TrendingUp,
  MessageSquare,
  Settings,
  Bell,
  MoreHorizontal,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
} from "lucide-react";
import "../../styles/FakeDashboard.css";

const ICON_SIZE = 14;

function Sidebar() {
  const icons = [
    <BarChart3 size={ICON_SIZE} />,
    <Package size={ICON_SIZE} />,
    <Tag size={ICON_SIZE} />,
    <FolderOpen size={ICON_SIZE} />,
    <TrendingUp size={ICON_SIZE} />,
    <MessageSquare size={ICON_SIZE} />,
    <Settings size={ICON_SIZE} />,
  ];
  return (
    <div className="dash-sidebar">
      {icons.map((icon, i) => (
        <div key={i} className={`dash-sidebar-icon${i === 0 ? " active" : ""}`}>
          {icon}
        </div>
      ))}
    </div>
  );
}

function TopBar({ isNew }: { isNew: boolean }) {
  return (
    <div className="dash-topbar">
      <div className="dash-topbar-left">
        <div className="dash-logo">S</div>
        <div className="dash-title">
          {isNew ? "NEW Dashboard" : "Dashboard"}
        </div>
        <input className="dash-search" placeholder="Search for anything" readOnly />
      </div>
      <div className="dash-topbar-right">
        <span className="topbar-icon" role="button" title="Settings">
          <Settings size={ICON_SIZE} />
        </span>
        <span className="topbar-icon notification-icon" role="button" title="Notifications">
          <Bell size={ICON_SIZE} />
          <span className="notification-badge">3</span>
        </span>
        <img
          className="dash-profile-img"
          src="https://api.dicebear.com/9.x/thumbs/svg?seed=Dragon&backgroundColor=b6e3f4"
          alt="Profile avatar"
        />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="dash-tabs">
      <div className="dash-tabs-left">
        <div className="dash-tab active">01 Overview</div>
        <div className="dash-tab">02 PPC</div>
        <div className="dash-tab">03 Year to year...</div>
        <div className="dash-tab">04 Customize</div>
      </div>
      <div className="dash-date-range">30 days Oct 16 / 21 – Nov 14 / 21</div>
    </div>
  );
}

function SummaryCard() {
  const items = [
    { label: "Overview", value: "1,552" },
    { label: "Campaigns", value: "1,552" },
    { label: "Ad Group", value: "1,552" },
    { label: "Keywords", value: "1,552" },
  ];
  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <div className="dash-card-title">Summary</div>
        <MoreHorizontal size={12} color="#bbb" />
      </div>
      {items.map((item) => (
        <div key={item.label} className="summary-item">
          <span className="summary-label">{item.label}</span>
          <span className="summary-value">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

function DonutCard() {
  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <div className="dash-card-title">Top 5 products by spend</div>
        <MoreHorizontal size={12} color="#bbb" />
      </div>
      <div className="donut-container">
        <div className="donut-total-label">Total score</div>
        <div className="donut-total-value">2,985</div>
        <svg className="donut-ring" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#ede8f5" strokeWidth="14" />
          <circle cx="60" cy="60" r="50" fill="none" stroke="#e991d0" strokeWidth="14"
            strokeDasharray="200 314" strokeDashoffset="0" transform="rotate(-90 60 60)" />
          <circle cx="60" cy="60" r="50" fill="none" stroke="#6c5ce7" strokeWidth="14"
            strokeDasharray="80 314" strokeDashoffset="-200" transform="rotate(-90 60 60)" />
          <circle cx="60" cy="60" r="50" fill="none" stroke="#f5e6a3" strokeWidth="14"
            strokeDasharray="34 314" strokeDashoffset="-280" transform="rotate(-90 60 60)" />
        </svg>
        <div className="donut-bottom-label">
          <div className="donut-bottom-value">$1,815.67</div>
          <div className="donut-bottom-code">B07MCGRV7M</div>
        </div>
      </div>
    </div>
  );
}

function CampaignTable() {
  const rows = [
    { name: "B08NY9N3MT", spend: "$30.25", sales: "$149.85", acos: "$149.85", color: "#e91e63" },
    { name: "Campaign - 3...", spend: "$40.00", sales: "$134.00", acos: "$134.50", color: "#ff9800" },
    { name: "Research - Ac...", spend: "$43.55", sales: "$129.75", acos: "$125.00", color: "#4caf50" },
    { name: "B087C75QQJ", spend: "$45.85", sales: "$113.00", acos: "$119.45", color: "#6c5ce7" },
    { name: "House Numbe...", spend: "$54.00", sales: "$99.55", acos: "$85.00", color: "#999" },
  ];
  return (
    <div className="dash-card">
      <div className="dash-card-header">
        <div className="dash-card-title">Highest ACoS campaigns</div>
      </div>
      <table className="campaign-table">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Spend</th>
            <th>Sales</th>
            <th>ACoS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td>
                <span className="campaign-dot" style={{ background: r.color }} />
                {r.name}
              </td>
              <td>{r.spend}</td>
              <td>{r.sales}</td>
              <td className="acos-highlight">{r.acos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MetricsRow() {
  const metrics = [
    { title: "Orders Created", value: "$134,970", prev: "$128,451", change: "+12.98%", up: true, highlight: false },
    { title: "Total Sales", value: "$2,145,132.80", prev: "$2,141,564.20", change: "+4.98%", up: true, highlight: true },
    { title: "PPC Sales", value: "$890.00", prev: "$872.00", change: "+0.17%", up: true, highlight: false },
    { title: "Units Sales", value: "$151,740", prev: "$145,869", change: "", up: true, highlight: false },
    { title: "Organic Sales Ra...", value: "100.00%", prev: "100.00%", change: "+0.12%", up: true, highlight: false },
  ];
  return (
    <div className="dash-metrics-row">
      {metrics.map((m) => (
        <div key={m.title} className={`metric-card${m.highlight ? " highlight" : ""}`}>
          <div className="metric-card-title">{m.title}</div>
          <div className="metric-card-date">Oct 16 / 21 - Nov 14 / 21</div>
          <div className="metric-card-value">{m.value}</div>
          <div className="metric-card-prev">{m.prev}</div>
          {m.change && (
            <span className={`metric-card-change ${m.up ? "up" : "down"}`}>
              {m.change} {m.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function ChartRow() {
  return (
    <div className="dash-chart-row">
      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-title"><TrendingDown size={12} style={{ marginRight: 4 }} />Costs</div>
          <div className="chart-legend">
            <span>Aug 21 - Sep 21</span>
            <span><span className="chart-legend-dot" style={{ background: "#e91e63" }} />Costs</span>
            <span><span className="chart-legend-dot" style={{ background: "#6c5ce7" }} />Exps</span>
            <span><span className="chart-legend-dot" style={{ background: "#c8c47e" }} />Odds</span>
          </div>
        </div>
        <div className="chart-placeholder"><TrendingDown size={16} color="#bbb" /> Chart visualization</div>
      </div>
      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-title"><PieChart size={12} style={{ marginRight: 4 }} />ACoS vs TACoS</div>
          <div className="chart-legend">
            <span>Aug 21 - Sep 21</span>
            <span><span className="chart-legend-dot" style={{ background: "#6c5ce7" }} />Coasts</span>
            <span><span className="chart-legend-dot" style={{ background: "#999" }} />Sell</span>
          </div>
        </div>
        <div className="chart-placeholder"><BarChart3 size={16} color="#bbb" /> Chart visualization</div>
      </div>
    </div>
  );
}

export function FakeDashboard() {
  const { flags } = useFlags();

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dash-main">
        <TopBar isNew={flags.newDashboard} />
        <Tabs />
        <div className="dash-card-grid">
          <SummaryCard />
          <DonutCard />
          <CampaignTable />
        </div>
        <MetricsRow />
        <FeatureGate flag="advancedReports">
          <ChartRow />
        </FeatureGate>
      </div>
    </div>
  );
}
