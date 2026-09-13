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
    role: "会计学（国际方向）本科 · ACCA 班",
    company: "上海对外经贸大学",
    summary: "从会计专业出发，建立理解业务、财务数据与报表关系的基础。",
    details: [
      { label: "学业表现", body: "GPA 3.61/4.0，连续 7 学期获得校级奖学金。" },
      { label: "专业学习", body: "系统学习会计与财务管理课程，ACCA 全科通过。" },
      { label: "英语能力", body: "2017 年“批改网杯”全国大学生英语写作大赛全国总决赛一等奖。" },
    ],
  },
  {
    id: "foundation",
    index: "阶段 1 / 3",
    kind: "工作经历",
    period: "2019.01 — 2021.10",
    title: "基础财务与总账",
    role: "财务专员 / 总账会计",
    company: "上海南燕信息技术有限公司 / 上海君铧富励信息技术有限公司",
    summary: "从财务支持与日常作业入手，参与财务系统建设、数据标准化和业务流程优化。",
    details: [
      { label: "财务数据整理", body: "搭建内部往来对账、资金周报、外币折算及电商收入模板，完成历史往来、应收及流水数据核对清理，提高财务数据准确性和月度报表编制效率。" },
      { label: "基础财务分析", body: "参与管理层报表编制，对收入等重点财务数据进行多维度环比分析，支持管理层了解当期经营和财务表现。" },
      { label: "系统功能提需", body: "推动业务系统与开票系统对接、微信商城自助开票等财务功能上线，梳理财务流程、字段口径和操作说明，提升开票及财务处理效率。" },
    ],
  },
  {
    id: "analysis",
    index: "阶段 2 / 3",
    kind: "工作经历",
    period: "2021.10 — 2024.06",
    title: "报表与财务分析",
    role: "总账会计（集团财务分析）",
    company: "中国民生投资股份有限公司",
    summary: "从合并报表、投资项目和历史数据中追踪科目变化、重大事项与经营影响。",
    details: [
      { label: "财务分析与自动化", body: "搭建合并财务分析、费用分析及管理报表模板，使用 Excel/Python 进行自动化取数和数据预处理，支持月度、年度财务分析及异常波动定位。" },
      { label: "报表分析与风险识别", body: "按业务板块进行财务报表同比、环比分析，分析科目勾稽关系及异常波动，协助识别潜在财务风险。" },
      { label: "历史数据清理", body: "梳理历史财务台账及业务资料，识别账实差异和长期挂账问题，推动约 1.8 亿元历史负债项目厘清及会计处理调整。" },
      { label: "报表线上化", body: "梳理财务附表和合并报表的数据源、流程和口径，与信息部门及子公司协作推进报表线上化，提高数据一致性和报送效率。" },
    ],
  },
  {
    id: "decision",
    index: "阶段 3 / 3",
    kind: "工作经历",
    period: "2024.06 — 2026.08",
    title: "BI建模与经营分析",
    role: "海外财务分析 / 经营分析 / FP&A",
    company: "唯渡科技（互联网金融）",
    summary: "围绕海外业务经营场景，通过业务指标体系、预测模型和 BI 分析支持管理层经营判断。",
    details: [
      { label: "海外业务 FP&A", body: "围绕泰国、印尼等海外市场的人力、委外、通信及其他管理成本，建立预算、实际、滚动预测及资金预测分析框架，支持月度经营复盘、预算提交和管理层决策。" },
      { label: "长期成本预测", body: "基于业务 Driver、基准月、国家、队列、成本类型及关键参数调整进行长期成本测算；部分月份与国家预测值和实际值的差异率控制在 5% 以内。" },
      { label: "实时成本监控", body: "跟踪 D1–15/30 成本率、D15/30+ 业务产出指标、实际成本及预测差异，将部分成本分析从月末预实复盘前移至事中监控和异常识别。" },
      { label: "Power BI 与指标口径", body: "维护并优化成本及预算相关 Power BI 模型、成本分摊逻辑、底层 D 表及指标解释文档，支持财务、运营、HR、合规和管理层的数据需求。" },
      { label: "专项分析与业务沟通", body: "按月输出国家成本、净回款、资金预测及预算差异分析，拆解业务量、单位成本、结构变化及策略调整影响，并跟踪部分分析建议的后续执行情况。" },
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
      { label: "学业表现", body: "专业课均分 94.5；毕业论文获推荐参选优秀毕业论文。" },
      { label: "课程学习", body: "应用随机过程、金融中的统计模型、现代数值分析与计算、数理统计方法。" },
      { label: "研究生建模竞赛", body: "全国三等奖；负责 SARIMA 与 LSTM 时间序列预测及结果分析。" },
      { label: "全国大学生统计建模大赛", body: "上海市三等奖；负责 SAC 强化学习对冲环境搭建及运行结果评价。" },
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
        <svg className="career-axis" viewBox="0 0 1000 300" role="img" aria-labelledby="career-axis-title career-axis-desc">
          <title id="career-axis-title">从2019年至2027年的职业与学习成长路径</title>
          <desc id="career-axis-desc">每年一个节点，三段工作经历沿上升曲线展开，两段教育经历与能力成长相互呼应。</desc>
          <path className="career-curve" d="M 70 166 C 220 166 315 154 430 139 S 690 110 934 84" />
          <path className="career-tenure career-tenure-one" d="M 70 166 C 150 166 220 162 286 155" />
          <path className="career-tenure career-tenure-two" d="M 286 155 C 395 149 500 129 610 118" />
          <path className="career-tenure career-tenure-three" d="M 610 118 C 688 110 756 101 826 96" />
          <path className="career-bachelor-connector" d="M 70 166 L 70 78" />
          <path className="career-card-connector" d="M 244 159 L 244 184" />
          <path className="career-card-connector" d="M 438 138 L 438 82" />
          <path className="career-card-connector" d="M 718 107 L 718 77" />
          <path className="career-card-connector" d="M 760 103 L 760 184" />
          <path className="career-card-connector" d="M 934 84 L 934 63" />
          <circle className="career-card-anchor" cx="244" cy="159" r="4" />
          <circle className="career-card-anchor" cx="438" cy="138" r="4" />
          <circle className="career-card-anchor" cx="718" cy="107" r="4" />
          <circle className="career-card-anchor" cx="760" cy="103" r="4" />
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
          <span className="career-card-period">2024.06—2026.08</span>
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
