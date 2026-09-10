import type { Metadata } from "next";
import { ExperienceTimeline } from "./experience-timeline";
import { ProjectSection } from "./project-section";
import { SectionKeyboardNavigation } from "./section-keyboard-navigation";

export const metadata: Metadata = {
  title: "李子默｜Finance Analytics Portfolio",
  description: "李子默的 Finance Analytics 作品集：FP&A、经营分析、游戏运营分析、财务数据分析与可控自动化。",
};

const strengths = [
  { number: "01", title: "Planning & Performance", cn: "规划与经营分析", body: "预算、滚动预测、差异分析和管理报告，把数字变化连接到清晰的经营动作。", tags: ["Budget", "Forecast", "Variance"] },
  { number: "02", title: "Data & Decision", cn: "数据与决策支持", body: "从口径治理到可视化看板，把分散数据整理为可追踪、可复核的业务信号。", tags: ["Power BI", "SQL", "Python"] },
  { number: "03", title: "Finance Transformation", cn: "财务数字化转型", body: "结合财务判断、Power BI 与 Python，推进数据治理、预测监控和报表自动化，让分析流程更快、更可复核，并为可控 AI 工作流预留应用空间。", tags: ["Automation", "Data Governance", "AI Workflow"] },
];

export default function Home() {
  return (
    <main id="top">
      <SectionKeyboardNavigation />
      <header className="site-header">
        <nav className="main-nav" aria-label="主导航">
          <a href="#experience">经历</a><a href="#capabilities">能力</a><a href="#work">项目</a><a href="#contact">联系</a>
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
            <a className="primary-cta" href="#experience">查看经历 <span aria-hidden="true">↓</span></a>
            <a className="text-cta" href="#contact">和我聊聊 <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <dl className="credential-board hero-credentials">
          <div><dt>7 年</dt><dd className="credential-primary">财务与分析</dd></div>
          <div><dt className="credential-nowrap">同济大学</dt><dd>应用统计硕士</dd></div>
          <div><dt>CPA · ACCA</dt><dd className="credential-lines"><span>税务师 · 中级会计师</span><span>CFA Level I 通过</span></dd></div>
          <div><dt>Power BI · Python</dt><dd>Excel · SQL</dd></div>
          <div className="credential-model"><dt>统计建模</dt><dd className="credential-lines"><span>时间序列 · 数理统计</span><span>机器学习 · 深度学习</span><span>ARIMA · LGBM</span><span>LSTM · TFT · SAC</span></dd></div>
        </dl>
      </section>

      <section className="experience-section shell section-space" id="experience">
        <div className="section-intro experience-section-intro">
          <p className="overline">01 / EXPERIENCE</p>
          <div><h2>经历</h2><p>从财务流程数字化起步，逐步走向数据治理、经营分析与业务决策支持。</p></div>
        </div>
        <ExperienceTimeline />
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

      <ProjectSection />

      <footer id="contact">
        <div className="shell footer-main">
          <div className="footer-content">
            <p className="overline">04 / CONTACT</p>
            <h2>一起把复杂数据，<br /><span>变成清晰决策。</span></h2>
            <p className="footer-note">正在寻找经营分析、FP&amp;A 与 AI Commercial Finance 机会。</p>
            <div className="contact-row">
              <a className="contact-card" href="mailto:15221824019@163.com">
                <small>邮箱</small><span className="contact-value">15221824019@163.com</span><b aria-hidden="true">↗</b>
              </a>
              <a className="contact-card" href="tel:15221824019">
                <small>电话/微信</small><span className="contact-value">15221824019</span><b aria-hidden="true">↗</b>
              </a>
            </div>
            <div className="resume-row">
              <a href="/resume.pdf" target="_blank">中文简历 <span>↗</span></a>
              <a href="/resume-en.pdf" target="_blank">English Resume <span>↗</span></a>
            </div>
          </div>
          <div className="footer-bottom"><span>李子默 · 上海长宁</span><span>FINANCE ANALYTICS PORTFOLIO · 2026</span><a href="#top">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
