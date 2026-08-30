"use client";

import { useState } from "react";

type ExperienceStage = {
  id: string;
  index: string;
  period: string;
  title: string;
  role: string;
  company: string;
  summary: string;
  learning: string;
  details: string[];
  mark: string;
};

const stages: ExperienceStage[] = [
  {
    id: "foundation",
    index: "01 · PROCESS",
    period: "2019 — 2021",
    title: "财务流程数字化起点",
    role: "财务专员 / 总账会计",
    company: "上海君铧富励 / 南燕集团",
    summary: "从资金、收入、应收和开票场景入手，将重复处理转化为标准模板、自动化工具和系统需求。",
    learning: "能力积累｜财务流程理解、数据标准化与系统需求表达",
    details: [
      "整合资金、收入、应收及业务流水数据，搭建标准化分析与核对模板。",
      "将重复性数据处理和核对流程工具化，提高月度数据准确性和管理信息输出效率。",
      "参与业务、银行及开票系统需求梳理，推动财务数据流程标准化。",
      "主导推进微信商城自助开票上线，连接业务、电商与财务流程。",
    ],
    mark: "FOUNDATION",
  },
  {
    id: "analysis",
    index: "02 · ANALYSIS",
    period: "2021 — 2024",
    title: "从数据治理到管理分析",
    role: "财务分析与管理报告",
    company: "中国民生投资集团",
    summary: "从集团多业务板块和复杂历史数据中识别异常、解释风险，推动管理报告自动化与线上化。",
    learning: "学习主线｜同济大学应用统计硕士：时间序列、机器学习与统计建模",
    details: [
      "负责集团月度及年度财务分析，按业务板块追踪关键指标、同比环比变化及重大异常。",
      "搭建多业务板块财务分析、费用分析及管理报告模板，引入 Excel 与 Python 优化分析流程。",
      "整合历史财务数据与业务资料，推动约 1.8 亿元历史负债厘清，提升风险透明度。",
      "协同信息部门及子公司推进管理报告线上化与数据标准化。",
    ],
    mark: "03 YRS",
  },
  {
    id: "decision",
    index: "03 · DECISION",
    period: "2024 — 2026",
    title: "连接业务驱动与经营决策",
    role: "海外业务 FP&A / 经营分析",
    company: "唯渡科技",
    summary: "围绕预算、预测、成本效率和经营监控，把财务结果连接到资源配置与业务行动。",
    learning: "学习转化｜将预测、异常识别与数据建模方法应用于真实经营问题",
    details: [
      "负责海外业务预算、滚动预测与预实分析，围绕业务量、单位成本和资源投入拆解经营变化。",
      "从 0 到 1 搭建 Power BI 成本分析体系，实现多国家、多维度经营表现追踪。",
      "建立业务驱动型长期预测与情景测算模型，部分国家及整体预测偏差控制在 5% 以内。",
      "将成本管理由月末复盘前移至月内动态监控，支持业务及时调整资源投入。",
    ],
    mark: "LATEST",
  },
];

export function ExperienceTimeline() {
  const [selectedId, setSelectedId] = useState("decision");
  const selectedStage = stages.find((stage) => stage.id === selectedId) ?? stages[2];

  return (
    <div className="career-timeline">
      <p className="career-narrative">我并不是从财务转向数据，而是在不同阶段持续用数据和技术解决更复杂的财务与经营问题。</p>

      <div className="career-map" aria-label="2019年至今的职业成长时间轴">
        <svg className="career-axis" viewBox="0 0 1000 116" role="img" aria-labelledby="career-axis-title career-axis-desc">
          <title id="career-axis-title">2019年至今的职业发展路径</title>
          <desc id="career-axis-desc">2019、2021、2024和现在四个时间点，由一条起伏的曲线连接。</desc>
          <path className="career-curve" d="M 18 68 C 120 18 232 22 330 58 S 552 94 666 48 S 874 24 982 60" />
          <circle className="career-dot" cx="18" cy="68" r="7" />
          <circle className="career-dot" cx="330" cy="58" r="7" />
          <circle className="career-dot" cx="666" cy="48" r="7" />
          <circle className="career-dot career-dot-latest" cx="982" cy="60" r="7" />
          <text className="career-year" x="18" y="102" textAnchor="start">2019</text>
          <text className="career-year" x="330" y="92" textAnchor="middle">2021</text>
          <text className="career-year" x="666" y="82" textAnchor="middle">2024</text>
          <text className="career-year" x="982" y="94" textAnchor="end">NOW</text>
        </svg>

        {stages.map((stage, index) => (
          <button
            className={`career-stage-card career-stage-${index + 1}`}
            type="button"
            key={stage.id}
            aria-pressed={selectedId === stage.id}
            aria-controls="career-detail"
            onClick={() => setSelectedId(stage.id)}
          >
            <span className="career-stage-index">{stage.index}</span>
            <strong>{stage.title}</strong>
            <span className="career-stage-role">{stage.company} · {stage.period}</span>
            <span className="career-stage-summary">{stage.summary}</span>
            <span className="career-stage-learning">{stage.learning}</span>
          </button>
        ))}

        <span className="career-mobile-now">NOW · 财务 × 业务 × 数据 × 技术</span>
      </div>

      <article className="career-detail" id="career-detail" aria-live="polite">
        <div className="career-detail-heading">
          <span>{selectedStage.index}</span>
          <h3>{selectedStage.title}</h3>
          <p>{selectedStage.role}</p>
          <p>{selectedStage.company} · {selectedStage.period}</p>
          <small>{selectedStage.learning}</small>
        </div>
        <ul>
          {selectedStage.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>
        <span className="career-detail-mark">{selectedStage.mark}</span>
      </article>
    </div>
  );
}
