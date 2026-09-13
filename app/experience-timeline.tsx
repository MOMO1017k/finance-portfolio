"use client";

import { useState } from "react";

type JourneyDetail = {
  id: string;
  index: string;
  kind: "工作经历" | "教育经历";
  period: string;
  title: string;
  role: string;
  company: string;
  summary: string;
  details: { label: string; body: string }[];
};

const journeyDetails: JourneyDetail[] = [
  {
    id: "bachelor",
    index: "阶段 1 / 2",
    kind: "教育经历",
    period: "2015.09 — 2019.06",
    title: "财务管理基础积累",
    role: "会计学（国际方向）本科",
    company: "上海对外经贸大学",
    summary: "从会计专业出发，建立理解业务、财务数据与报表关系的基础。",
    details: [
      { label: "学业表现", body: "GPA 3.61/4.0，连续7学期校级奖学金；ACCA全科通过。" },
      { label: "获奖情况", body: "2017“批改网杯”全国大学生英语写作大赛全国总决赛一等奖。" },
    ],
  },
  {
    id: "foundation",
    index: "阶段 1 / 3",
    kind: "工作经历",
    period: "2019.01 — 2021.10",
    title: "基础财务与总账",
    role: "财务专员 / 总账会计",
    company: "南燕集团 / FAFULI",
    summary: "从财务支持与日常作业入手，参与财务系统建设、数据标准化和业务流程优化。",
    details: [
      { label: "财务报表与数据治理", body: "负责账务处理、财务报表及管理报表，搭建资金、收入、对账等标准化模板，清理历史往来及应收数据。" },
      { label: "财务流程数字化", body: "参与财务相关系统需求上线，梳理业务与财务流程、整理需求并跟进开发上线及优化。" },
    ],
  },
  {
    id: "analysis",
    index: "阶段 2 / 3",
    kind: "工作经历",
    period: "2021.10 — 2024.06",
    title: "报表与财务分析",
    role: "总账会计（集团财务分析）",
    company: "中国民生投资集团",
    summary: "从合并报表、投资项目和历史数据中追踪科目变化、重大事项与经营影响。",
    details: [
      { label: "集团财务分析", body: "编制月度及年度财务分析材料，从合并报表层面拆解科目变化、重大事项及经营影响，支持管理层财务信息理解。" },
      { label: "投资项目分析", body: "参与投资项目减值事项分析，收集核对子公司减值数据提供汇报支持，跟踪资产减值变化原因。" },
      { label: "财务数据治理", body: "梳理历史台账及账务资料，发现长期挂账及账实差异，推动约1.8亿元历史负债厘清及会计处理调整。" },
    ],
  },
  {
    id: "decision",
    index: "阶段 3 / 3",
    kind: "工作经历",
    period: "2024.09 — 2026.08",
    title: "BI建模与经营分析",
    role: "高级财务分析师",
    company: "唯渡科技",
    summary: "围绕海外业务经营场景，通过业务指标体系、预测模型和 BI 分析支持管理层经营判断。",
    details: [
      { label: "海外经营分析与FP&A", body: "围绕业务规模、资源投入和效率指标开展日常与月度经营复盘、预算预测，拆解波动原因并支持策略判断。" },
      { label: "经营分析体系与BI模型建设", body: "基于业务流程、成本归集规则，设计模型结构，从0到1搭建PowerBI分析模型，实现各指标关联分析。" },
      { label: "预测与情景测算", body: "基于业务规模和成本驱动因素，搭建参数化长期成本预测模型并开展情景测算；实现预测与实际差异控制在5%以内。" },
      { label: "经营指标监控", body: "参与每日指标看板建设与优化，开展指标校验与异常跟踪，支持月内预测偏差修正及经营表现监控。" },
    ],
  },
  {
    id: "master",
    index: "阶段 2 / 2",
    kind: "教育经历",
    period: "2024.09 — 2026.06",
    title: "统计建模与技术融合",
    role: "应用统计硕士（非全）",
    company: "同济大学",
    summary: "系统学习统计建模、机器学习与时间序列，并通过比赛和毕业设计将方法应用于真实分析问题。",
    details: [
      { label: "学业表现", body: "专业课均分94.5；毕业论文获推荐参选优秀毕业论文。" },
      { label: "课程学习", body: "系统学习相关理论课程，通过实践重点提升统计建模、机器学习与强化学习、时间序列分析、量化分析能力。" },
      { label: "2024全国研究生工业与经济金融大数据建模大赛", body: "全国三等奖；负责SARIMA、LSTM时间序列预测及结果分析。" },
      { label: "2025（第十一届）全国大学生统计建模大赛", body: "上海市三等奖；负责SAC模型对冲环境搭建及运行结果评价。" },
    ],
  },
];

const years = [
  { year: "2019", x: 70, y: 166 },
  { year: "2020", x: 178, y: 163 },
  { year: "2021", x: 286, y: 155 },
  { year: "2022", x: 394, y: 143 },
  { year: "2023", x: 502, y: 130 },
  { year: "2024", x: 610, y: 118 },
  { year: "2025", x: 718, y: 107 },
  { year: "2026", x: 826, y: 96 },
  { year: "2027", x: 934, y: 84 },
];

function getDetail(id: string) {
  return journeyDetails.find((item) => item.id === id) ?? journeyDetails[3];
}

export function ExperienceTimeline() {
  const [selectedId, setSelectedId] = useState("decision");
  const selectedStage = getDetail(selectedId);
  const selectedIndex = journeyDetails.findIndex((item) => item.id === selectedId);

  const selectStage = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(journeyDetails.length - 1, index));
    setSelectedId(journeyDetails[boundedIndex].id);
  };

  return (
    <div className="career-timeline">
      <p className="career-narrative">工作经历是主线，学习与技术是持续汇入主线的能力支流。</p>

      <div className="career-map" aria-label="2019年至2027年的职业与学习成长时间轴">
        <svg className="career-axis" viewBox="0 0 1000 300" preserveAspectRatio="none" role="img" aria-labelledby="career-axis-title career-axis-desc">
          <title id="career-axis-title">从2019年至2027年的职业与学习成长路径</title>
          <desc id="career-axis-desc">每年一个节点，三段工作经历沿上升曲线展开，两段教育经历与能力成长相互呼应。</desc>
          <path className="career-curve" d="M 70 166 C 220 166 315 154 430 139 S 690 110 934 84" />
          <path className="career-tenure career-tenure-one" d="M 70 166 C 180 166 280 156 367 147" />
          <path className="career-tenure career-tenure-two" d="M 367 147 C 475 133 570 121 664 113" />
          <path className="career-tenure career-tenure-three" d="M 691 110 C 760 102 835 94 898 88" />
          <path className="career-bachelor-connector" d="M 70 166 L 70 78" />
          <path className="career-card-connector" d="M 70 166 L 70 212" />
          <path className="career-card-connector" d="M 367 147 L 367 82" />
          <path className="career-card-connector" d="M 691 110 L 691 78" />
          <path className="career-card-connector" d="M 691 110 L 691 183" />
          <path className="career-card-connector" d="M 934 84 L 934 63" />
          <circle className="career-card-anchor" cx="70" cy="166" r="4" />
          <circle className="career-card-anchor" cx="367" cy="147" r="4" />
          <circle className="career-card-anchor" cx="691" cy="110" r="4" />
          {years.map(({ year, x, y }) => (
            <g className="career-year" key={year}>
              <circle cx={x} cy={y} r="5" />
              <text x={x} y={y + 25} textAnchor="middle">{year}</text>
            </g>
          ))}
          <path className="career-end-mark" d="M 934 76 L 942 84 L 934 92 L 926 84 Z" />
        </svg>

        <button className="career-stage-card career-bachelor-card" type="button" aria-pressed={selectedId === "bachelor"} aria-controls="career-detail" onClick={() => setSelectedId("bachelor")}>
          <span className="career-card-period">2015.09—2019.06</span>
          <strong>上海对外经贸大学 · ACCA 班</strong>
          <span className="career-card-action">展开 <span aria-hidden="true">＋</span></span>
          <span className="career-card-hint">点击查看教育经历</span>
        </button>
        <div className="career-bachelor-caption">财务管理基础积累</div>

        <button className="career-stage-card career-work-one" type="button" aria-pressed={selectedId === "foundation"} aria-controls="career-detail" onClick={() => setSelectedId("foundation")}>
          <span className="career-card-period">2019.01—2021.10</span>
          <strong>基础财务与总账</strong>
          <span>FAFULI → 南燕集团</span>
          <span className="career-card-action">展开 <span aria-hidden="true">＋</span></span>
          <span className="career-card-hint">点击查看工作经历</span>
        </button>
        <div className="career-bridge career-bridge-one"><strong>主动标准化作业流</strong></div>

        <button className="career-stage-card career-work-two" type="button" aria-pressed={selectedId === "analysis"} aria-controls="career-detail" onClick={() => setSelectedId("analysis")}>
          <span className="career-card-period">2021.10—2024.06</span>
          <strong>报表与财务分析</strong>
          <span>中国民生投资集团</span>
          <span className="career-card-action">展开 <span aria-hidden="true">＋</span></span>
          <span className="career-card-hint">点击查看工作经历</span>
        </button>
        <div className="career-bridge career-bridge-two"><strong>业务理解与数据驱动的分析决策</strong></div>

        <button className="career-stage-card career-work-three" type="button" aria-pressed={selectedId === "decision"} aria-controls="career-detail" onClick={() => setSelectedId("decision")}>
          <span className="career-card-period">2024.09—2026.08</span>
          <strong>BI建模与经营分析</strong>
          <span>唯渡科技 · 高级财务分析师</span>
          <span className="career-card-action">展开 <span aria-hidden="true">＋</span></span>
          <span className="career-card-hint">点击查看工作经历</span>
        </button>

        <button className="career-stage-card career-master-card" type="button" aria-pressed={selectedId === "master"} aria-controls="career-detail" onClick={() => setSelectedId("master")}>
          <span className="career-card-period">2024.09—2026.06</span>
          <strong>同济大学 · 应用统计硕士</strong>
          <span>统计建模、机器学习与强化学习、时间序列分析</span>
          <span className="career-card-action">展开 <span aria-hidden="true">＋</span></span>
          <span className="career-card-hint">点击查看教育经历</span>
        </button>

        <div className="career-outcome"><strong>经营决策支持</strong><span>未来持续发展方向</span></div>
      </div>

      <div className="career-progress" aria-label="经历翻页控件">
        <button type="button" aria-label="上一段经历" disabled={selectedIndex === 0} onClick={() => selectStage(selectedIndex - 1)}>←</button>
        <label>
          <span className="career-progress-label">明细展开如下</span>
          <input type="range" min="0" max={journeyDetails.length - 1} step="1" value={selectedIndex} aria-valuetext={`${selectedStage.kind} ${selectedStage.index}：${selectedStage.company}`} onChange={(event) => selectStage(Number(event.target.value))} />
        </label>
        <span className="career-progress-count">{String(selectedIndex + 1).padStart(2, "0")} / {String(journeyDetails.length).padStart(2, "0")}</span>
        <button type="button" aria-label="下一段经历" disabled={selectedIndex === journeyDetails.length - 1} onClick={() => selectStage(selectedIndex + 1)}>→</button>
      </div>

      <article className={`career-detail career-detail-${selectedStage.kind === "工作经历" ? "work" : "education"}`} id="career-detail" aria-live="polite">
        <div className="career-detail-heading">
          <span>{selectedStage.kind} · {selectedStage.index}</span>
          <h3>{selectedStage.company}</h3>
          <p>{selectedStage.role}</p>
          <time>{selectedStage.period}</time>
        </div>
        <div className="career-detail-copy">
          <p>{selectedStage.summary}</p>
          <ol>
            {selectedStage.details.map((detail) => (
              <li key={detail.label}><strong>{detail.label}：</strong>{detail.body}</li>
            ))}
          </ol>
        </div>
      </article>
    </div>
  );
}
