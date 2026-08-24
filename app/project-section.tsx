"use client";

import { type MouseEvent, useMemo, useState } from "react";

type ProjectCategory = "fpa" | "game";
type ProjectVisualType = "system" | "pipeline" | "kpi" | "signals" | "attribution" | "placeholder";

type Project = {
  id: string;
  category: ProjectCategory;
  label: string;
  title: string;
  summary: string;
  tags: string[];
  visual: ProjectVisualType;
  available: boolean;
  featured?: boolean;
  question?: string;
  metrics?: [string, string][];
  highlights?: string[];
  outputs?: string[];
  cases?: [string, string][];
};

const projects: Project[] = [
  {
    id: "fpa-cost-forecast",
    category: "fpa",
    label: "FP&A",
    title: "海外业务成本分摊与滚动预测",
    summary: "预算、成本透明化与预测差异分析案例，正在整理可公开展示的业务口径与脱敏数据。",
    tags: ["预算管理", "滚动预测", "差异分析"],
    visual: "placeholder",
    available: false,
  },
  {
    id: "fpa-long-range-plan",
    category: "fpa",
    label: "FP&A",
    title: "参数化长期预测模型",
    summary: "以经营参数连接收入、成本和情景假设，形成可复核的长期预测与敏感性分析。",
    tags: ["长期规划", "情景测算", "参数模型"],
    visual: "placeholder",
    available: false,
  },
  {
    id: "fpa-data-governance",
    category: "fpa",
    label: "财务数据治理",
    title: "历史负债清理与口径治理",
    summary: "从历史台账与账务数据出发，重建核对逻辑、证据链和管理口径。",
    tags: ["数据治理", "账务核对", "管理报告"],
    visual: "placeholder",
    available: false,
  },
  {
    id: "fpa-report-automation",
    category: "fpa",
    label: "分析自动化",
    title: "Power BI 经营报告自动化",
    summary: "将分散数据、固定口径和管理报告连接为可追踪、可复核的分析流程。",
    tags: ["Power BI", "Python", "报告自动化"],
    visual: "placeholder",
    available: false,
  },
  {
    id: "game-system",
    category: "game",
    label: "旗舰系统",
    title: "游戏运营风险预警与归因系统",
    summary: "将125万条文本和104万张图片转化为19项时序指标，识别瞬时故障、持续危机与长期舆情漂移。",
    tags: ["运营分析", "时序分析", "多模态分析"],
    visual: "system",
    available: true,
    featured: true,
    question: "如何把高噪声、跨模态的玩家舆情，转化为可持续监测并能够支持运营行动的风险信号？",
    metrics: [["125万", "文本"], ["104万", "图片"], ["19项", "指标"], ["25,056", "监测窗口"]],
    highlights: ["从公开社交媒体原始数据到15分钟级多维指标的完整链路", "通过PA、CA、CP区分突发故障、持续危机与基线漂移", "利用文本主题与高频图片解释风险背后的业务原因", "在261天历史数据上完成离线模拟验证"],
    outputs: ["系统总架构与数据流", "分层风险结果总览", "典型危机归因分析", "局限性与落地路线图"],
    cases: [["检出表现", "10起官方危机检出6起，其中中高等级危机检出5/6。"], ["隐性问题", "危机池外点异常中，约43%可归因为真实微观产品缺陷。"], ["使用边界", "当前价值更接近自动监测兜底与归因，而不是普遍领先于官方响应的先验预测。"]],
  },
  {
    id: "game-pipeline",
    category: "game",
    label: "数据工程",
    title: "多模态社交媒体数据管线",
    summary: "整合微博广场、官方评论、运营日历、文本和图片，建立采集、清洗与时间对齐流程。",
    tags: ["Python数据处理", "数据管线", "文本清洗"],
    visual: "pipeline",
    available: true,
    question: "如何把来源不同、噪声极高且表达方式不一致的文本和图片，整理成可用于时序分析的数据基础？",
    metrics: [["2+2", "广场与评论双来源"], ["15分钟", "统一时间粒度"], ["261天", "检测区间"], ["229万", "多模态原始记录"]],
    highlights: ["简单清洗保留规模与传播结构，严格清洗服务语义与情感分析", "通过官方UID、无关UID与领域词典减少内容污染", "对文本、图片和运营事件执行统一时间窗口聚合", "保留原始内容用于预警后的业务回溯"],
    outputs: ["数据来源与字段地图", "双层清洗规则示例", "时间窗口聚合流程", "脱敏样例与质量报告"],
    cases: [["输入", "广场关键词微博、官方微博评论、官方运营事件日历与配图。"], ["处理", "正文清洗、领域过滤、情感预处理、图片感知哈希与时间对齐。"], ["输出", "可供特征计算与危机回溯的结构化多模态数据。"]],
  },
  {
    id: "game-kpi",
    category: "game",
    label: "指标与特征设计",
    title: "19项游戏运营风险指标体系",
    summary: "把玩家文本与图片转化为规模结构、文本形态、情感、语义漂移和视觉传播五类持续监测指标。",
    tags: ["运营指标设计", "特征工程", "玩家声音"],
    visual: "kpi",
    available: true,
    question: "怎样把“玩家情绪不对劲”这种模糊判断，拆解成可以计算、比较和持续追踪的经营监控指标？",
    metrics: [["5类", "指标维度"], ["19项", "总指标"], ["2来源", "广场与评论"], ["1套", "指标字典"]],
    highlights: ["规模结构：讨论量、用户集中度与转发占比", "文本形态：情绪符号、文本重复度与长短文本数量", "情感与语义：负面占比和相邻窗口语义漂移", "视觉传播：重复图片规模与头部图片集中度"],
    outputs: ["19项指标字典", "指标计算逻辑", "三个典型时段对比", "指标业务含义说明"],
    cases: [["常态窗口", "多数指标维持在稳定区间，用作日常背景参照。"], ["突发故障", "负面占比、短文本与语义漂移在短时间内同时跳升。"], ["持续危机", "讨论量下降后，局部均值和负面结构仍长期未回归。"]],
  },
  {
    id: "game-detection",
    category: "game",
    label: "时序建模",
    title: "自适应时序风险检测引擎",
    summary: "利用合成正常基线、TFT预测偏差和多维统计规则，对不同时间尺度的运营风险进行分层识别。",
    tags: ["异常检测", "TFT", "自适应监测"],
    visual: "signals",
    available: true,
    question: "在真实正常样本不足、历史数据包含异常且底层分布持续变化的情况下，如何建立可靠的监测基线？",
    metrics: [["PA", "瞬时异常"], ["CA", "持续危机"], ["CP", "长期漂移"], ["2次", "模型基线切换"]],
    highlights: ["分解真实时序并逆向合成无异常污染的正常训练基线", "提取残差、注意力与变量选择结构的多类偏差信号", "分别采用投票、密度与波动率、趋势平滑识别三类风险", "通过确认、微调、并行验证与安全切换更新模型基线"],
    outputs: ["正常基线合成框架", "16维偏差信号矩阵", "PA/CA/CP判定流程", "自适应切换时间线"],
    cases: [["PA", "识别闪退、页面打不开等快速出现又快速回落的局部故障。"], ["CA", "识别核心诉求长期未解决、负面反馈持续积压的结构性危机。"], ["CP", "识别版本、用户结构或社区情绪导致的长期数据基线变化。"]],
  },
  {
    id: "game-attribution",
    category: "game",
    label: "业务分析",
    title: "玩家危机归因与运营策略分析",
    summary: "结合文本主题、高频图片与异常时间定位，把模型信号还原为产品缺陷、商业化争议和运营干预问题。",
    tags: ["根因分析", "BERTopic", "业务洞察"],
    visual: "attribution",
    available: true,
    question: "预警出现后，运营团队如何快速判断发生了什么、涉及哪些玩家诉求，以及应该升级给谁处理？",
    metrics: [["860次", "评论侧多数表决"], ["173次", "广场侧多数表决"], ["93条", "典型危机负面短句"], ["3类", "重点业务案例"]],
    highlights: ["通过主导数据源和偏差类型完成异常时空定位", "利用SBERT与BERTopic提取负面主题及原文样本", "利用感知哈希聚类识别高频传播图片", "把统计异常翻译为技术、产品、商业化与运营机制问题"],
    outputs: ["危机主题分布", "负面短句抽样", "高频图片证据", "运营机制与行动建议"],
    cases: [["技术故障", "页面打不开、拍照闪退等问题在修复后迅速回落，形成点异常。"], ["商业化争议", "核心经济权益受影响，引发大规模爆发并进一步演化为持续危机。"], ["补偿失效", "补偿降低了声量，却未解决套装拆分与保底机制等核心诉求。"]],
  },
];

const filterLabels = { all: "全部", fpa: "FP&A", game: "游戏运营分析" } as const;
type ProjectFilter = keyof typeof filterLabels;
const pageSize = 2;

function ProjectVisual({ type, expanded = false }: { type: ProjectVisualType; expanded?: boolean }) {
  if (type === "system") {
    return (
      <div className={`project-art project-art-system${expanded ? " is-expanded" : ""}`} role="img" aria-label="多模态数据依次经过指标计算、TFT检测、三类风险判定和业务归因">
        <div className="system-route"><span>数据输入<small>文本 · 图片</small></span><b>→</b><span>19项指标<small>15分钟</small></span><b>→</b><span>TFT<small>偏差信号</small></span></div>
        <div className="system-result"><b>↓</b><span className="risk-pa">PA</span><span className="risk-ca">CA</span><span className="risk-cp">CP</span><b>→</b><span className="system-root">业务归因</span></div>
      </div>
    );
  }

  if (type === "pipeline") {
    return (
      <div className={`project-art project-art-pipeline${expanded ? " is-expanded" : ""}`} role="img" aria-label="文本、图片和运营事件经双层清洗后聚合为15分钟监测窗口">
        <span className="source-stack"><i>文</i><i>图</i><i>历</i></span><b>→</b><span className="clean-stage"><i /><i /><i /><i /><small>双层清洗</small></span><b>→</b><span className="window-stage"><i /><i /><i /><i /><small>15分钟窗口</small></span>
      </div>
    );
  }

  if (type === "kpi") {
    return (
      <div className={`project-art project-art-kpi${expanded ? " is-expanded" : ""}`} role="img" aria-label="19项指标由规模结构5项、文本形态8项、情感形态2项、语义漂移2项和视觉形态2项构成">
        <span className="kpi-total"><strong>19</strong><small>项指标</small></span>
        <span className="kpi-composition"><span className="kpi-bar"><i /><i /><i /><i /><i /></span><small>规模5　文本8　情感2　语义2　视觉2</small></span>
      </div>
    );
  }

  if (type === "signals") {
    return (
      <div className={`project-art project-art-signals${expanded ? " is-expanded" : ""}`} role="img" aria-label="PA尖峰、CA持续异常和CP基线漂移三种时序风险形态，以及CP触发的模型切换">
        <span className="signal-labels"><i>PA</i><i>CA</i><i>CP</i></span>
        <span className="signal-plots"><i className="signal-pa" /><i className="signal-ca" /><i className="signal-cp" /></span>
        <span className="model-switch">切换<br />模型</span>
      </div>
    );
  }

  if (type === "attribution") {
    return (
      <div className={`project-art project-art-attribution${expanded ? " is-expanded" : ""}`} role="img" aria-label="异常窗口通过文本主题、高频图片和业务分类形成多模态根因">
        <span className="topic-bars"><i /><i /><i /><i /></span><b>＋</b><span className="image-cluster"><i /><i /><i /><i /></span><b>→</b><span className="root-cause"><strong>业务根因</strong><small>产品 · 运营</small></span>
      </div>
    );
  }

  return (
    <div className="project-art project-art-placeholder" role="img" aria-label="FP&A案例内容整理中">
      <span /><span /><span /><i>内容整理中</i>
    </div>
  );
}

export function ProjectSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const selected = projects.filter((project) => filter === "all" || project.category === filter);
    return filter === "all" ? [...selected].sort((a, b) => Number(b.available) - Number(a.available)) : selected;
  }, [filter]);
  const pageCount = Math.max(1, Math.ceil(filteredProjects.length / pageSize));
  const visibleProjects = filteredProjects.slice(page * pageSize, page * pageSize + pageSize);
  const selectedProject = projects.find((project) => project.id === selectedId && project.available);

  function selectFilter(nextFilter: ProjectFilter) {
    setFilter(nextFilter);
    setPage(0);
    setSelectedId(null);
  }

  function changePage(direction: number) {
    setPage((current) => (current + direction + pageCount) % pageCount);
  }

  function jumpFromTrack(event: MouseEvent<HTMLButtonElement>) {
    if (event.detail === 0) {
      changePage(1);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    setPage(Math.min(pageCount - 1, Math.max(0, Math.floor(ratio * pageCount))));
  }

  return (
    <section className="work-section shell section-space" id="work">
      <div className="section-intro project-section-intro">
        <p className="overline">01 / PROJECT</p>
        <div><h2>项目</h2><p>展示我如何拆解真实问题、建立分析方法，并将结果转化为可复核的业务结论。</p></div>
      </div>

      {selectedProject ? (
        <article className="project-detail" aria-live="polite">
          <button className="project-back" type="button" onClick={() => setSelectedId(null)}>← 返回项目列表</button>
          <div className="project-detail-hero">
            <div>
              <p className="project-detail-label">{selectedProject.label}</p>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.question}</p>
            </div>
            <ProjectVisual type={selectedProject.visual} expanded />
          </div>
          <dl className="project-detail-metrics">
            {selectedProject.metrics?.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
          </dl>
          <div className="project-detail-grid">
            <section><h4>核心展示内容</h4><ul>{selectedProject.highlights?.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section><h4>可检查的项目成果</h4><div className="detail-output-list">{selectedProject.outputs?.map((item) => <span key={item}>{item}</span>)}</div></section>
            <section className="detail-evidence"><h4>业务证据与案例</h4><div>{selectedProject.cases?.map(([label, body]) => <p key={label}><strong>{label}</strong><span>{body}</span></p>)}</div></section>
            <section><h4>能力标签</h4><div className="detail-tags">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></section>
          </div>
        </article>
      ) : (
        <>
          <div className="project-filter" role="group" aria-label="项目分类筛选">
            {(Object.keys(filterLabels) as ProjectFilter[]).map((key) => (
              <button key={key} type="button" aria-pressed={filter === key} onClick={() => selectFilter(key)}>{filterLabels[key]}</button>
            ))}
          </div>

          <div className="project-window" aria-live="polite">
            <div className="project-row">
              {visibleProjects.map((project) => (
                <button
                  className={`project-tile${project.featured ? " is-featured" : ""}${project.available ? "" : " is-pending"}`}
                  type="button"
                  key={project.id}
                  disabled={!project.available}
                  onClick={() => project.available && setSelectedId(project.id)}
                >
                  <span className="project-tile-copy">
                    <span className="project-tile-label">{project.label}</span>
                    <strong>{project.title}</strong>
                    <span className="project-tile-summary">{project.summary}</span>
                    <span className="project-tile-tags">{project.tags.map((tag) => <i key={tag}>{tag}</i>)}</span>
                    <span className="project-tile-link">{project.available ? "查看项目详情 →" : "内容整理中"}</span>
                  </span>
                  <ProjectVisual type={project.visual} />
                </button>
              ))}
            </div>
          </div>

          <div className="project-pager" aria-label="项目横向翻页">
            <button type="button" aria-label="上一页项目" onClick={() => changePage(-1)}>←</button>
            <button className="project-progress-track" type="button" aria-label={`项目页进度，第${page + 1}页，共${pageCount}页`} onClick={jumpFromTrack}>
              <span style={{ width: `${((page + 1) / pageCount) * 100}%` }} />
            </button>
            <button type="button" aria-label="下一页项目" onClick={() => changePage(1)}>→</button>
            <span>PAGE {String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}</span>
          </div>
        </>
      )}
    </section>
  );
}
