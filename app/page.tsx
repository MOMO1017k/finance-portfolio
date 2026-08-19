import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "李子默｜Finance Analytics Portfolio",
  description: "李子默的 Finance Analytics 作品集：经营分析、FP&A、财务数据分析与可控自动化。",
};

const strengths = [
  { number: "01", title: "Planning & Performance", cn: "规划与经营分析", body: "预算、滚动预测、差异分析和管理报告，把数字变化连接到清晰的经营动作。", tags: ["Budget", "Forecast", "Variance"] },
  { number: "02", title: "Data & Decision", cn: "数据与决策支持", body: "从口径治理到可视化看板，把分散数据整理为可追踪、可复核的业务信号。", tags: ["Power BI", "SQL", "Python"] },
  { number: "03", title: "Finance Transformation", cn: "财务流程优化", body: "用自动化与统计方法缩短重复工作，让团队把时间留给判断、沟通与决策。", tags: ["Automation", "Control", "AI Workflow"] },
];

const experience = [
  { period: "2024 — 2026", role: "海外业务 FP&A / 经营分析", body: "负责预算、滚动预测、成本分摊与经营监控，推动 Power BI 报告与成本透明化。", mark: "NOW" },
  { period: "2021 — 2024", role: "财务分析 · 中国民生投资", body: "开展历史数据治理、分析自动化与管理报告体系化，支持复杂经营问题的澄清与决策。", mark: "03 YRS" },
  { period: "2019 — 2021", role: "财务数据与系统支持", body: "从财务基础工作进入数据与系统场景，建立对流程、口径和数据质量的完整理解。", mark: "FOUNDATION" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <nav className="main-nav" aria-label="主导航">
          <a href="#work">项目</a><a href="#capabilities">能力</a><a href="#experience">经历</a><a href="#contact">联系</a>
        </nav>
        <div className="resume-menu" aria-label="简历下载">
          <a className="resume-link" href="/resume.pdf" target="_blank">中文简历 <span aria-hidden="true">↗</span></a>
          <a className="resume-link" href="/resume-en.pdf" target="_blank">EN RESUME <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="portfolio-hero shell" aria-labelledby="hero-title">
        <div className="hero-status">
          <span className="status"><i /> OPEN TO WORK</span>
          <p><small>TARGET ROLES</small> 经营分析 · FP&amp;A · AI Commercial Finance</p>
        </div>
        <div className="hero-main">
          <p className="overline">FINANCE ANALYTICS · SHANGHAI</p>
          <h1 id="hero-title"><span className="name-cn">李子默</span><span className="name-en">Aelita</span></h1>
          <p className="hero-statement">把财务问题，转化为可行动的数据答案。</p>
          <p className="hero-summary"><span>7 年财务与分析经验，横跨经营&amp;财务分析、长期预测、预算管理、数据治理与自动化。</span><br /><span>我关注的不只是“发生了什么”，更是为什么发生、接下来该做什么。</span></p>
          <div className="hero-cta">
            <a className="primary-cta" href="#work">查看作品 <span aria-hidden="true">↓</span></a>
            <a className="text-cta" href="#contact">和我聊聊 <span aria-hidden="true">↓</span></a>
          </div>
        </div>

      </section>

      <section className="work-section shell section-space" id="work">
        <div className="section-intro">
          <p className="overline">01 / PROJECT</p>
          <div><h2>项目</h2><p>展示我如何拆解真实问题、建立分析方法，并将结果转化为可复核的业务结论。</p></div>
        </div>
        <article className="project-card">
          <div className="project-visual">
            <img src="/results-overview.png" alt="多模态舆情风险预警项目的结果概览" />
            <div className="visual-label"><span>CASE 01</span><span>MASTER&apos;S PROJECT</span></div>
            <div className="visual-signal" aria-hidden="true">
              {[28, 36, 31, 51, 44, 72, 54, 86, 62, 46, 39, 57].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
            </div>
          </div>
          <div className="project-copy">
            <div className="project-meta"><span>DATA &amp; ANALYTICS</span><span>2026</span></div>
            <p className="project-index">01</p>
            <h3>多模态舆情风险<br />预警框架</h3>
            <p>从 125 万+文本与 104 万+图片中提取 19 维时序信号，探索如何更早识别、解释并复核运营风险。</p>
            <div className="project-tags"><span>TIME SERIES</span><span>PYTHON</span><span>NLP</span><span>BUSINESS MONITORING</span></div>
            <div className="coming-link" aria-label="项目详情将在下一阶段接入">查看项目详情 <span>下一阶段接入 →</span></div>
          </div>
        </article>
      </section>

      <section className="capability-section" id="capabilities">
        <div className="shell section-space">
          <div className="section-intro inverse">
            <p className="overline">02 / CAPABILITIES</p>
            <div><h2>能力</h2><p>结合财务判断、数据分析与自动化，让规划更快、报告更清楚、决策更容易执行。</p></div>
          </div>
          <div className="capability-grid">
            {strengths.map((item) => (
              <article key={item.number}>
                <div className="capability-top"><span>{item.number}</span><span>↗</span></div>
                <p>{item.title}</p><h3>{item.cn}</h3><div className="capability-line" />
                <p className="capability-body">{item.body}</p>
                <div className="capability-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section shell section-space" id="experience">
        <div className="section-intro">
          <p className="overline">03 / EXPERIENCE</p>
          <div><h2>经历</h2><p>选取与当前求职方向最相关的经历；完整信息可在中英文简历中查看。</p></div>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article key={item.period}>
              <span className="experience-number">0{index + 1}</span><p className="experience-period">{item.period}</p>
              <div><h3>{item.role}</h3><p>{item.body}</p></div><span className="experience-mark">{item.mark}</span>
            </article>
          ))}
        </div>
        <div className="credential-board">
          <div className="credential-lead"><p className="overline">PROFILE</p><h3>7 年<br />财务与分析经验</h3></div>
          <div><small>EDUCATION</small><strong>同济大学</strong><span>应用统计硕士 · 2026</span></div>
          <div><small>CREDENTIALS</small><strong>CPA · ACCA</strong><span>专业资质 · 中级会计师</span></div>
          <div><small>CREDENTIALS</small><strong>CFA I</strong><span>通过一级考试</span></div>
          <div><small>TOOLS</small><strong>Power BI · Python</strong><span>SQL · Excel · Data Modeling</span></div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-main">
          <p className="overline">04 / CONTACT</p>
          <h2>一起把复杂数据，<br /><span>变成清晰决策。</span></h2>
          <p className="footer-note">正在寻找经营分析、FP&amp;A 与 AI Commercial Finance 机会。</p>
          <div className="contact-row">
            <a href="mailto:15221824019@163.com">15221824019@163.com <span>↗</span></a>
            <a href="tel:18651708315">18651708315 <span>↗</span></a>
            <a href="/resume.pdf" target="_blank">中文简历 <span>↗</span></a>
            <a href="/resume-en.pdf" target="_blank">English Resume <span>↗</span></a>
          </div>
          <div className="footer-bottom"><span>李子默 · 上海</span><span>FINANCE ANALYTICS PORTFOLIO · 2026</span><a href="#top">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
