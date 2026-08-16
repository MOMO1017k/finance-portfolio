import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "李子默｜多模态舆情预警案例",
  description:
    "从125万+文本与104万+图片中提取19维时序信号，构建可解释、可复核的运营风险预警框架。",
};

const metrics = [
  ["125万+", "文本样本"],
  ["104万+", "图片样本"],
  ["19", "监控指标"],
  ["15 min", "监控粒度"],
];

const featureGroups = [
  {
    index: "01",
    name: "规模结构",
    count: "5 项",
    items: "讨论量 · 用户集中度 · 转发占比 · 长短文本结构",
    role: "判断声量是否突然放大，以及是否由少数账号主导。",
  },
  {
    index: "02",
    name: "文本形态",
    count: "8 项",
    items: "情绪符号烈度 · 文本压缩比 · 长短文本计数",
    role: "捕捉刷屏、复制传播与情绪表达强度的变化。",
  },
  {
    index: "03",
    name: "情感形态",
    count: "2 项",
    items: "负面占比 · 领域词典修正 · 贝叶斯平滑",
    role: "把情感倾向变成可持续比较的稳定信号。",
  },
  {
    index: "04",
    name: "语义漂移",
    count: "2 项",
    items: "相邻窗口语义距离 · SBERT · 余弦相似度",
    role: "识别讨论焦点是否从常规内容转向新的争议。",
  },
  {
    index: "05",
    name: "视觉形态",
    count: "2 项",
    items: "视觉冗余量 · 视觉集中度 · pHash 聚类",
    role: "发现截图、梗图与投诉指南等高频图片的协同传播。",
  },
];

const pipeline = [
  ["01", "采集与清洗", "微博广场、官方评论与运营日历；清理转发链、噪声和无正文内容。"],
  ["02", "构建 19 维信号", "每 15 分钟聚合文本、情感、语义与视觉特征，形成多维面板。"],
  ["03", "生成纯净基线", "分解趋势、周期、事件效应与波动率，再用 Gaussian Copula 还原相关性。"],
  ["04", "提取预测偏差", "在合成基准上预训练 TFT，以残差、注意力与变量选择偏移作为检测信号。"],
  ["05", "分层检测与归因", "区分点异常、集体异常与长程漂移，并回溯负面主题和高频图片。"],
];

const anomalyTypes = [
  {
    code: "PA",
    title: "点异常",
    label: "瞬时冲击",
    desc: "用多通道投票捕捉某一窗口的显著偏离，适合识别闪退、活动页面故障等突然事件。",
  },
  {
    code: "CA",
    title: "集体异常",
    label: "持续失稳",
    desc: "用密度与波动率双约束识别连续异常窗口，关注用户诉求未被解决后的持续对抗。",
  },
  {
    code: "CP",
    title: "长程漂移",
    label: "基线重构",
    desc: "用趋势平滑判断分布基线是否改变，并触发模型微调、并行验证与安全切换。",
  },
];

export default function Home() {
  return (
    <main id="top">
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回顶部">
          LZM<span> / 01</span>
        </a>
        <div className="navlinks">
          <a href="#case">案例</a>
          <a href="#method">方法</a>
          <a href="#results">验证</a>
          <a href="#contact">联系</a>
          <a className="nav-resume" href="/resume.html" target="_blank">
            简历 ↗
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FINANCE ANALYTICS · CASE STUDY 01</p>
          <h1>
            在舆情成为危机之前，
            <span>先看到结构变化。</span>
          </h1>
          <p className="hero-intro">
            我把非结构化社交媒体数据变成可监控、可归因、可复核的经营信号：从多模态数据清洗，到时序建模，再到面向运营团队的分层预警。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#case">
              查看案例 <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-ghost" href="/resume.html" target="_blank">
              查看简历 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <dl className="metric-row" aria-label="项目关键数据">
            {metrics.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="signal-stage" aria-label="预警信号示意图">
          <div className="stage-topline">
            <span>LIVE SIGNAL / 15 MIN</span>
            <span className="live-dot">MONITORING</span>
          </div>
          <div className="signal-grid" aria-hidden="true">
            {[18, 24, 20, 31, 26, 38, 42, 36, 49, 61, 54, 82, 70, 57, 47, 39].map(
              (height, index) => (
                <span
                  className={index === 11 ? "is-alert" : ""}
                  key={index}
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
          <div className="alert-card">
            <div>
              <small>COLLECTIVE ANOMALY</small>
              <strong>舆论焦点正在重组</strong>
            </div>
            <span>CA</span>
          </div>
          <div className="stage-footer">
            <span>TEXT</span>
            <span>SEMANTIC</span>
            <span>VISUAL</span>
            <span>SENTIMENT</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>MONITOR</span><i>•</i><span>EXPLAIN</span><i>•</i><span>DECIDE</span><i>•</i>
        <span>MONITOR</span><i>•</i><span>EXPLAIN</span><i>•</i><span>DECIDE</span>
      </div>

      <section className="brief section-shell" id="case">
        <div className="section-label">
          <span>01</span>
          <p>THE BRIEF</p>
        </div>
        <div className="section-title-wrap">
          <p className="kicker">经营问题，而不只是模型问题</p>
          <h2>把“事后看热搜”，改造成可解释的前置监控。</h2>
        </div>
        <div className="brief-copy">
          <p className="lead">
            开放世界手游投入高、周期长，商业表现与持续口碑紧密相连。但真实舆情数据高频、嘈杂、缺少标签，还会随着版本迭代不断改变“正常”的定义。
          </p>
          <p>
            这份硕士毕业设计的任务，是为运营团队建立一条从数据到行动的完整链路：识别异常、判断持续性、解释原因，并明确哪些结果仍需要人工复核。
          </p>
        </div>

        <div className="brief-grid">
          <article>
            <small>BUSINESS QUESTION</small>
            <h3>什么时候，常规波动已经变成需要介入的风险？</h3>
          </article>
          <article>
            <small>MY ROLE</small>
            <h3>独立完成数据、指标、建模、验证与业务归因。</h3>
          </article>
          <article>
            <small>RESEARCH OBJECT</small>
            <h3>《无限暖暖》微博公开数据，覆盖 1.0–1.11 版本。</h3>
          </article>
          <article>
            <small>OUTPUT</small>
            <h3>异常分层、原因证据、模型切换与风险边界。</h3>
          </article>
        </div>

        <blockquote>
          “不是预测玩家会不会生气，而是判断‘正常波动’何时已经改变业务含义。”
        </blockquote>
      </section>

      <section className="data-section">
        <div className="data-summary section-shell">
          <div className="section-label light-label">
            <span>02</span>
            <p>THE SIGNALS</p>
          </div>
          <div className="data-heading">
            <p className="kicker">FROM NOISE TO SIGNAL</p>
            <h2>先定义可观察的业务现象，再选择模型。</h2>
            <p>
              公开数据覆盖 2024.12.05–2025.11.26：95 万+广场内容、30 万+评论与 104 万+图片。所有数据按 15 分钟窗口聚合。
            </p>
          </div>
        </div>

        <div className="feature-list section-shell">
          {featureGroups.map((feature) => (
            <article key={feature.index}>
              <span className="feature-index">{feature.index}</span>
              <div>
                <h3>{feature.name}</h3>
                <p>{feature.items}</p>
              </div>
              <strong>{feature.count}</strong>
              <p className="feature-role">{feature.role}</p>
            </article>
          ))}
        </div>

        <a className="evidence-frame wide-evidence" href="/feature-system.png" target="_blank">
          <img src="/feature-system.png" alt="答辩中的五维十九项特征体系总览" loading="lazy" />
          <span>查看答辩原图：特征体系 ↗</span>
        </a>
        <p className="source-note section-shell">
          数据来自公开社交媒体研究样本；本项目与游戏品牌不存在隶属或商业合作关系。
        </p>
      </section>

      <section className="method section-shell" id="method">
        <div className="section-label">
          <span>03</span>
          <p>THE METHOD</p>
        </div>
        <div className="method-heading">
          <p className="kicker">HUMAN-CHECKED AUTOMATION</p>
          <h2>机器负责扫描，人负责判断。</h2>
          <p>
            真实历史数据本身混有异常，直接训练会把危机学成“正常”。因此先构造干净基线，再让 TFT 学习正常演化路径，最后对偏差做分层判断。
          </p>
        </div>

        <div className="pipeline">
          {pipeline.map(([index, title, desc]) => (
            <article key={index}>
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>

        <div className="method-evidence-grid">
          <a className="evidence-frame" href="/detection-framework.png" target="_blank">
            <img src="/detection-framework.png" alt="从离线预训练到在线检测和归因的检测框架" loading="lazy" />
            <span>检测与归因框架 ↗</span>
          </a>
          <div className="quality-card">
            <p className="kicker">SYNTHETIC BASELINE QA</p>
            <h3>合成数据不是“看起来像”，而是通过三层检验。</h3>
            <div className="quality-metrics">
              <div><strong>&lt; 8%</strong><span>多数特征均值误差</span></div>
              <div><strong>&lt; 10%</strong><span>多数特征标准差误差</span></div>
              <div><strong>11 / 19</strong><span>ACF 绝对偏差低于 0.09</span></div>
            </div>
            <a href="/quality-check.png" target="_blank">查看完整质量检验 ↗</a>
          </div>
        </div>

        <div className="anomaly-grid">
          {anomalyTypes.map((type) => (
            <article key={type.code}>
              <div className="anomaly-code">{type.code}</div>
              <p>{type.label}</p>
              <h3>{type.title}</h3>
              <div className="mini-signal" aria-hidden="true">
                {[22, 28, type.code === "PA" ? 90 : 35, type.code === "CA" ? 78 : 42, type.code === "CP" ? 84 : 30, 26].map((height, i) => (
                  <i key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
              <p className="anomaly-desc">{type.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="results" id="results">
        <div className="results-inner section-shell">
          <div className="section-label light-label">
            <span>04</span>
            <p>THE EVIDENCE</p>
          </div>
          <div className="results-heading">
            <p className="kicker">REAL DATA · HONEST LIMITS</p>
            <h2>结果不追求“漂亮”，追求能解释。</h2>
          </div>

          <div className="result-hero-grid">
            <div className="big-result">
              <div className="result-ring" aria-hidden="true"><span>60%</span></div>
              <div>
                <small>KNOWN CRISIS RECALL</small>
                <h3>6 / 10 已知危机被检出</h3>
                <p>
                  对中高严重度事件更有效：Level 2 检出 2/2，Level 3 检出 3/4；低强度事件则容易落在正常方差区间。
                </p>
              </div>
            </div>
            <div className="result-stack">
              <article><strong>90</strong><span>段点异常事件</span></article>
              <article><strong>5</strong><span>段集体异常事件</span></article>
              <article><strong>2</strong><span>次长程漂移与模型切换</span></article>
              <article><strong>95.81%</strong><span>窗口保持正常判定</span></article>
            </div>
          </div>

          <div className="insight-band">
            <div><strong>860 : 173</strong><span>评论子模型 vs 广场子模型的多数表决次数</span></div>
            <p>
              评论区对突发情绪的聚集效应明显更强；902 次预警由变量重要性排序突变主导，说明核心风险通常来自“舆论焦点的结构性重组”，而不只是声量变大。
            </p>
          </div>

          <a className="evidence-frame results-image" href="/results-overview.png" target="_blank">
            <img src="/results-overview.png" alt="预警结果总览及预警诱因分布" loading="lazy" />
            <span>查看答辩原图：预警结果总览 ↗</span>
          </a>
        </div>
      </section>

      <section className="case-proof section-shell">
        <div className="section-label">
          <span>05</span>
          <p>THE PROOF</p>
        </div>
        <div className="proof-heading">
          <p className="kicker">FROM ALERT TO ACTION</p>
          <h2>预警之后，必须回答“为什么”。</h2>
          <p>
            系统通过异常时间窗口、主导变量、负面主题和高频图片进行回溯。它不替运营团队下结论，而是把需要复核的证据聚到同一个决策界面。
          </p>
        </div>

        <div className="proof-grid">
          <article>
            <div className="proof-copy">
              <span>PA / 瞬时技术故障</span>
              <h3>故障具体、修复路径明确，异常快速回落。</h3>
              <p>主题与截图可直接定位“活动页面打不开”“拍照页面闪退”等问题，解释了点异常为何独立出现。</p>
            </div>
            <a className="evidence-frame" href="/point-anomaly.png" target="_blank">
              <img src="/point-anomaly.png" alt="点异常预警的文本主题与高频图片归因" loading="lazy" />
              <span>点异常归因证据 ↗</span>
            </a>
          </article>
          <article>
            <div className="proof-copy">
              <span>CA / 核心利益冲突</span>
              <h3>样本规模更大、主题更广，问题从爆发走向持续对抗。</h3>
              <p>93 条负面短句与高频投诉指南截图，指向商品化逻辑变化触及玩家核心经济权益。</p>
            </div>
            <a className="evidence-frame" href="/collective-anomaly.png" target="_blank">
              <img src="/collective-anomaly.png" alt="集体异常预警的主题分布与高频图片归因" loading="lazy" />
              <span>集体异常归因证据 ↗</span>
            </a>
          </article>
        </div>
      </section>

      <section className="limits">
        <div className="section-shell limits-inner">
          <div className="section-label light-label">
            <span>06</span>
            <p>THE JUDGMENT</p>
          </div>
          <div className="limits-heading">
            <p className="kicker">WHAT I WOULD NOT OVERCLAIM</p>
            <h2>这是一套经过离线验证的研究框架，不是已上线产品。</h2>
          </div>
          <div className="limit-list">
            <article><span>01</span><h3>单平台数据</h3><p>当前只覆盖微博；真实落地需要接入跨平台舆情以及日活、小时收益等内部指标。</p></article>
            <article><span>02</span><h3>固定时间窗口</h3><p>15 分钟兼顾统计稳定性与实时性，但可能错过持续时间极短的异常。</p></article>
            <article><span>03</span><h3>时效仍有限</h3><p>对官方响应滞后的事件可提前发现，但整体仍偏向高峰期兜底，而非先验预测。</p></article>
            <article><span>04</span><h3>需要人工复核</h3><p>无监督模型识别的是统计异常；责任归属、业务影响与处置动作仍应由专家确认。</p></article>
          </div>
        </div>
      </section>

      <section className="transfer section-shell">
        <div className="section-label">
          <span>07</span>
          <p>THE TRANSFER</p>
        </div>
        <div className="transfer-heading">
          <p className="kicker">WHY THIS BELONGS IN A FINANCE PORTFOLIO</p>
          <h2>领域是游戏舆情，能力是经营监控。</h2>
        </div>
        <div className="transfer-map">
          <article>
            <small>01 / MONITOR</small>
            <h3>指标体系与滚动监控</h3>
            <p>对应 FP&A 中预算、实际、Driver 与成本率的口径设计和事中监控。</p>
          </article>
          <div className="transfer-arrow">→</div>
          <article>
            <small>02 / EXPLAIN</small>
            <h3>偏差拆解与原因归因</h3>
            <p>对应 Variance Analysis：区分一次性冲击、持续偏差与基线变化。</p>
          </article>
          <div className="transfer-arrow">→</div>
          <article>
            <small>03 / DECIDE</small>
            <h3>阈值、复核与行动边界</h3>
            <p>对应管理报告：把异常压缩成可验证的证据，并明确人何时介入。</p>
          </article>
        </div>

        <div className="profile-strip">
          <div>
            <small>PROFILE</small>
            <strong>李子默 · Finance Analytics / 经营分析</strong>
          </div>
          <div><small>EXPERIENCE</small><strong>7 年财务与分析经验</strong></div>
          <div><small>EDUCATION</small><strong>同济大学 · 应用统计硕士</strong></div>
          <div><small>CREDENTIALS</small><strong>CPA · ACCA · CFA Level I</strong></div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-inner section-shell">
          <p className="kicker">LET&apos;S TURN DATA INTO DECISIONS</p>
          <h2>寻找 Finance Analytics、AI Commercial Finance 与经营分析机会。</h2>
          <div className="footer-links">
            <a href="mailto:15221824019@163.com">15221824019@163.com ↗</a>
            <a href="/resume.html" target="_blank">查看完整简历 ↗</a>
          </div>
          <div className="footer-bottom">
            <span>李子默 · 上海</span>
            <span>CASE 01 / 2026</span>
            <a href="#top">回到顶部 ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
