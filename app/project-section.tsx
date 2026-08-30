"use client";

import { useState } from "react";

const headlineMetrics = [
  ["125万+", "文本记录"],
  ["104万+", "图片记录"],
  ["19项", "监测指标"],
  ["15分钟", "统一监测粒度"],
] as const;

const technicalStages = [
  {
    number: "01",
    label: "DATA PIPELINE",
    title: "多模态数据管线",
    body: "整合微博广场、官方评论、运营日历、文本与图片，完成采集、双层清洗、去重和时间对齐，为持续监测建立统一的数据基础。",
    facts: ["广场与评论双来源", "文本、图片与事件日历", "15分钟时间窗口"],
  },
  {
    number: "02",
    label: "FEATURE SYSTEM",
    title: "19项风险指标体系",
    body: "将玩家声音拆解为规模与参与结构、文本形态、情感形态、语义变化和视觉传播五类可持续追踪的运营风险指标。",
    facts: ["5类指标维度", "19项正式特征", "统一指标字典"],
  },
  {
    number: "03",
    label: "NORMAL BASELINE",
    title: "合成正常基线",
    body: "针对历史数据被真实危机污染的问题，分解趋势、周期、事件冲击、自相关与条件波动，并逆向合成用于模型训练的正常序列。",
    facts: ["结构化分解", "Gaussian Copula", "相关矩阵误差 0.0075"],
  },
  {
    number: "04",
    label: "RISK DETECTION",
    title: "分层检测与自适应更新",
    body: "从TFT推理结果提取多维偏差信号，识别瞬时异常、持续危机和长期舆情基线变化，并通过并行验证与安全切换更新监测基线。",
    facts: ["16维偏差信号", "PA / CA / CP", "2次模型基线切换"],
  },
  {
    number: "05",
    label: "ATTRIBUTION",
    title: "文本与视觉归因",
    body: "在异常窗口中回溯负面原文、主题结构和高频传播图片，把统计信号还原为技术故障、产品机制、商业化争议与运营问题。",
    facts: ["文本主题建模", "高频图片聚类", "产品与运营问题分类"],
  },
] as const;

function EvidenceSummary() {
  return (
    <aside className="featured-case-evidence" aria-label="项目结果与证据摘要">
      <div className="featured-case-evidence-heading">
        <div><strong>结果与证据摘要</strong><span>已知事件验证 + 危机池外发现</span></div>
        <small>EVIDENCE</small>
      </div>

      <div className="featured-case-evidence-stack">
        <section>
          <h4><span>01</span>验证范围</h4>
          <div className="featured-case-range">
            <p><strong>261天</strong><span>历史滚动区间</span></p>
            <p><strong>25,056</strong><span>个监测窗口</span></p>
          </div>
        </section>

        <section>
          <h4><span>02</span>已知危机验证</h4>
          <div className="featured-case-known">
            <strong>5 / 6</strong>
            <p>中高等级危机获得预警<span>完整口径：10起官方危机检出6起</span></p>
          </div>
        </section>

        <section>
          <h4><span>03</span>危机池外异常发现</h4>
          <div className="featured-case-outside">
            <p><strong>76段</strong><span>池外点异常</span></p>
            <p><strong>约43%</strong><span>对应真实微观缺陷</span></p>
            <p><strong>4段</strong><span>持续性结构问题</span></p>
          </div>
        </section>

        <section>
          <h4><span>04</span>结论形成方式</h4>
          <p className="featured-case-proof">异常信号定位 → 原文与图片回溯 → 官方事件交叉验证 → 产品与运营问题归因</p>
        </section>
      </div>
    </aside>
  );
}

export function ProjectSection() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="work-section shell section-space" id="work">
      <div className="section-intro project-section-intro">
        <p className="overline">03 / PROJECT</p>
        <div><h2>项目</h2><p>展示我如何拆解真实问题、建立分析方法，并将结果转化为可复核的业务结论。</p></div>
      </div>

      {showDetail ? (
        <article className="case-detail" aria-live="polite">
          <button className="case-detail-back" type="button" onClick={() => setShowDetail(false)}>← 返回项目概览</button>

          <header className="case-detail-header">
            <p>FLAGSHIP CASE · GAME OPERATIONS</p>
            <h3>游戏运营舆情风险预警与归因</h3>
            <span>围绕“数据如何进入系统、风险如何被识别、结论如何被验证”展开五个技术环节。</span>
          </header>

          <dl className="case-detail-metrics">
            {headlineMetrics.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
          </dl>

          <div className="case-detail-intro">
            <div><span>研究问题</span><p>如何把高噪声、跨模态的玩家舆情，转化为能够持续监测、解释并支持运营行动的风险信号？</p></div>
            <div><span>项目定位</span><p>这是经过261天历史数据离线滚动验证的研究原型，主要价值是自动监测兜底、异常定位和业务归因，而非替代运营判断。</p></div>
          </div>

          <div className="case-stage-list" aria-label="项目五个技术环节">
            {technicalStages.map((stage) => (
              <section className="case-stage" key={stage.number}>
                <div className="case-stage-index"><span>{stage.number}</span><small>{stage.label}</small></div>
                <div className="case-stage-copy"><h4>{stage.title}</h4><p>{stage.body}</p></div>
                <ul>{stage.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              </section>
            ))}
          </div>

          <div className="case-detail-result">
            <div><span>验证结果</span><strong>中高等级危机检出 5 / 6</strong><p>完整口径为10起官方危机检出6起；未检出事件主要受到数据删除、15分钟窗口平滑和个体事件统计显著性不足影响。</p></div>
            <div><span>池外发现</span><strong>约43%的池外点异常对应真实微观缺陷</strong><p>危机池外异常经原文、图片和官方事件回溯后形成业务解释，但不作为“未知危机检出率”使用。</p></div>
          </div>

          <div className="case-detail-actions">
            <a href="https://github.com/MOMO1017k/game-social-media-risk-warning" target="_blank" rel="noreferrer">查看代码与方法 ↗</a>
            <button type="button" onClick={() => setShowDetail(false)}>返回首页项目卡 ↑</button>
          </div>
        </article>
      ) : (
        <article className="featured-case-card">
          <div className="featured-case-topline"><strong>01 / PUBLIC-OPINION RISK CASE</strong><span>MONITORING → WARNING → ATTRIBUTION</span></div>

          <div className="featured-case-layout">
            <div className="featured-case-copy">
              <p className="featured-case-kicker">游戏运营 · 舆情风险 · 时序建模</p>
              <h3>游戏运营舆情风险预警与归因</h3>
              <p className="featured-case-summary">基于玩家文本、图片与运营事件构建15分钟级多模态时序指标，利用合成正常基线与自适应异常检测识别瞬时异常、持续危机和长期舆情基线变化，并将风险信号回溯至具体玩家诉求与产品问题。</p>

              <dl className="featured-case-metrics">
                {headlineMetrics.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
              </dl>

              <div className="featured-case-footer">
                <div className="featured-case-tags"><span>多模态时序建模</span><span>自适应异常检测</span><span>可解释风险归因</span></div>
                <div className="featured-case-actions">
                  <button type="button" onClick={() => setShowDetail(true)}>查看完整案例 →</button>
                  <a href="https://github.com/MOMO1017k/game-social-media-risk-warning" target="_blank" rel="noreferrer">代码与方法 ↗</a>
                </div>
              </div>
            </div>

            <EvidenceSummary />
          </div>
        </article>
      )}
    </section>
  );
}
