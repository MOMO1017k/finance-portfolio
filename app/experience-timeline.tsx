"use client";

import { useState } from "react";

type JourneyDetail = {
  id: string;
  index: string;
  kind: "work" | "education";
  period: string;
  title: string;
  role: string;
  company: string;
  summary: string;
  learning: string;
  details: string[];
  mark: string;
};

const journeyDetails: JourneyDetail[] = [
  {
    id: "bachelor",
    index: "EDU · 01",
    kind: "education",
    period: "2015.09 — 2019.06",
    title: "财务管理基础积累",
    role: "会计学（国际方向）本科",
    company: "上海对外经贸大学",
    summary: "从会计专业出发，建立理解业务、财务数据与报表关系的基础。",
    learning: "学习积累｜会计与财务基础、ACCA、英语能力",
    details: [
      "GPA 3.61/4.0，连续 7 学期获得校级奖学金。",
      "系统学习会计与财务管理课程，ACCA 全科通过。",
      "2017 年“批改网杯”全国大学生英语写作大赛全国总决赛一等奖。",
    ],
    mark: "FOUNDATION",
  },
  {
    id: "foundation",
    index: "01 · PROCESS",
    kind: "work",
    period: "2019.01 — 2021.10",
    title: "数据治理与财务信息化",
    role: "财务专员 / 总账会计",
    company: "FAFULI / 南燕集团",
    summary: "从财务支持与日常作业入手，参与财务系统建设、数据标准化和业务流程优化。",
    learning: "成长转折｜主动标准化作业流",
    details: [
      "FAFULI 财务专员（2019.01—2020.07）；南燕集团总账会计（2020.07—2021.10）。",
      "负责账务处理、财务报表及管理报表，搭建资金、收入、对账等标准化模板，清理历史往来及应收数据。",
      "参与财务相关系统需求上线，梳理业务与财务流程，整理需求并跟进开发、上线及优化。",
    ],
    mark: "PROCESS",
  },
  {
    id: "analysis",
    index: "02 · ANALYSIS",
    kind: "work",
    period: "2021.10 — 2024.06",
    title: "报表与财务分析",
    role: "总账会计（集团财务分析）",
    company: "中国民生投资集团",
    summary: "从合并报表、投资项目和历史数据中追踪科目变化、重大事项与经营影响。",
    learning: "成长转折｜业务理解、数据驱动的分析决策",
    details: [
      "编制月度及年度财务分析材料，从合并报表层面拆解科目变化、重大事项及经营影响，支持管理层理解财务信息。",
      "参与投资项目减值事项分析，收集核对子公司减值数据并提供汇报支持，跟踪资产减值变化原因。",
      "梳理历史台账及账务资料，发现长期挂账及账实差异，推动约 1.8 亿元历史负债厘清及会计处理调整。",
    ],
    mark: "ANALYSIS",
  },
  {
    id: "decision",
    index: "03 · DECISION",
    kind: "work",
    period: "2024.09 — 2026.08",
    title: "BI建模与经营分析",
    role: "高级财务分析师",
    company: "唯渡科技（互联网金融）",
    summary: "围绕海外业务经营场景，通过业务指标体系、预测模型和 BI 分析支持管理层经营判断。",
    learning: "能力融合｜流程 × 数据 × 模型 → 经营决策支持",
    details: [
      "围绕业务规模、资源投入和效率指标开展日常与月度经营复盘、预算预测，拆解波动原因并支持策略判断。",
      "基于业务流程、成本归集规则设计模型结构，从 0 到 1 搭建 Power BI 经营分析模型，实现各指标关联分析。",
      "基于业务规模和成本驱动因素搭建参数化长期成本预测模型并开展情景测算，预测与实际差异控制在 5% 以内。",
      "参与每日指标看板建设与优化，开展指标校验与异常跟踪，支持月内预测偏差修正及经营表现监控。",
    ],
    mark: "LATEST",
  },
  {
    id: "master",
    index: "EDU · 02",
    kind: "education",
    period: "2024.09 — 2026.06",
    title: "统计建模与技术融合",
    role: "应用统计硕士（非全）",
    company: "同济大学",
    summary: "系统学习统计建模、机器学习与时间序列，并通过比赛和毕业设计将方法应用于真实分析问题。",
    learning: "并行成长｜时间序列、机器学习、深度学习与量化分析",
    details: [
      "专业课均分 94.5；毕业论文获推荐参选优秀毕业论文。",
      "系统学习统计建模、机器学习、深度学习、时间序列分析与量化分析，并通过实践提升模型应用能力。",
      "2024 全国研究生工业与经济金融大数据建模大赛全国三等奖，负责 SARIMA、LSTM 时间序列预测及结果分析。",
      "2025 全国大学生统计建模大赛上海市三等奖，负责 SAC 模型对冲环境搭建及运行结果评价。",
    ],
    mark: "EDUCATION",
  },
];

function getDetail(id: string) {
  return journeyDetails.find((item) => item.id === id) ?? journeyDetails[3];
}

export function ExperienceTimeline() {
  const [selectedId, setSelectedId] = useState("decision");
  const selectedStage = getDetail(selectedId);

  return (
    <div className="career-timeline">
      <p className="career-narrative">工作经历是主线，学习与技术是持续汇入主线的能力支流。</p>

      <div className="career-map" aria-label="2015年至2026年的职业与学习成长时间轴">
        <svg className="career-axis" viewBox="0 0 1000 390" role="img" aria-labelledby="career-axis-title career-axis-desc">
          <title id="career-axis-title">从财务管理基础到BI建模与经营分析的成长路径</title>
          <desc id="career-axis-desc">三段工作经历沿连续曲线上升，两段教育经历作为起点和并行成长支线。</desc>
          <path className="career-curve" d="M 50 282 C 145 282 160 265 220 265 S 405 228 520 168 S 695 112 800 82 S 900 46 952 38" />
          <path className="career-study-curve" d="M 650 310 C 725 306 790 300 930 300" />
          <rect className="career-start-mark" x="45" y="277" width="10" height="10" />
          <path className="career-end-mark" d="M 952 30 L 960 38 L 952 46 L 944 38 Z" />
        </svg>

        <button className="career-education-point career-bachelor-point" type="button" aria-pressed={selectedId === "bachelor"} aria-controls="career-detail" onClick={() => setSelectedId("bachelor")}>
          <span className="career-education-marker" aria-hidden="true" />
          <span className="career-point-copy"><strong>财务管理基础积累</strong><span>2015.09—2019.06</span></span>
        </button>

        <div className="career-work-point career-work-one">
          <button className="career-node" type="button" aria-label="查看数据治理与财务信息化经历" aria-pressed={selectedId === "foundation"} aria-controls="career-detail" onClick={() => setSelectedId("foundation")}>01</button>
          <div className="career-point-copy"><span className="career-period">2019.01—2021.10</span><strong>数据治理与财务信息化</strong><span>FAFULI → 南燕集团</span></div>
        </div>

        <div className="career-bridge career-bridge-one"><strong>主动标准化作业流</strong></div>

        <div className="career-work-point career-work-two">
          <button className="career-node" type="button" aria-label="查看报表与财务分析经历" aria-pressed={selectedId === "analysis"} aria-controls="career-detail" onClick={() => setSelectedId("analysis")}>02</button>
          <div className="career-point-copy"><span className="career-period">2021.10—2024.06</span><strong>报表与财务分析</strong><span>中国民生投资集团</span></div>
        </div>

        <div className="career-bridge career-bridge-two"><strong>业务理解、数据驱动的分析决策</strong></div>

        <div className="career-work-point career-work-three">
          <button className="career-node" type="button" aria-label="查看BI建模与经营分析经历" aria-pressed={selectedId === "decision"} aria-controls="career-detail" onClick={() => setSelectedId("decision")}>03</button>
          <div className="career-point-copy"><span className="career-period">2024.09—2026.08</span><strong>BI建模与经营分析</strong><span>唯渡科技 · 高级财务分析师</span></div>
        </div>

        <button className="career-education-point career-master-point" type="button" aria-pressed={selectedId === "master"} aria-controls="career-detail" onClick={() => setSelectedId("master")}>
          <span className="career-education-marker" aria-hidden="true" />
          <span className="career-point-copy"><span className="career-period">并行成长线 · 2024.09—2026.06</span><strong>同济大学 · 应用统计硕士</strong><span>时间序列 · 机器学习 · 多模态异常检测</span></span>
        </button>

        <div className="career-outcome"><strong>经营决策支持</strong><span>流程 × 数据 × 模型</span></div>
      </div>

      <article className={`career-detail career-detail-${selectedStage.kind}`} id="career-detail" aria-live="polite">
        <div className="career-detail-heading">
          <span>{selectedStage.index}</span>
          <h3>{selectedStage.title}</h3>
          <p>{selectedStage.role}</p>
          <p>{selectedStage.company} · {selectedStage.period}</p>
          <small>{selectedStage.learning}</small>
        </div>
        <div className="career-detail-copy">
          <p>{selectedStage.summary}</p>
          <ul>{selectedStage.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        </div>
        <span className="career-detail-mark">{selectedStage.mark}</span>
      </article>
    </div>
  );
}
