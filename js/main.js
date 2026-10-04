/**
 * AHMED ASHRAF HAFEZ — PORTFOLIO JAVASCRIPT
 * Real verified data from C:\projects & interactive UI logic
 */

// =============================================================================
// 1. VERIFIED PROJECTS DATABASE
// =============================================================================
const projectsData = [
  {
    id: "flight-delay",
    title: "AeroPredict – Flight Delay Prediction & Intelligence Platform",
    category: "ml",
    categoryLabel: "Machine Learning / Predictive Analytics",
    bannerIcon: "fas fa-plane-departure",
    image: null,
    shortDesc: "End-to-end binary classification system predicting commercial flight delays over 15 minutes across 2M flight records, integrated with an interactive Streamlit intelligence dashboard.",
    objective: "Predict whether a scheduled flight will arrive >15 minutes late (IS_DELAYED) and uncover operational delay patterns across airlines, hubs, and temporal cycles.",
    problem: "Flight delays disrupt airline scheduling, passenger itineraries, and ground logistics. Because ~82% of flights arrive on time, severe class imbalance undermines standard accuracy, necessitating high-recall, calibrated probability threshold optimization.",
    dataset: "U.S. Department of Transportation Bureau of Transportation Statistics Flight Dataset",
    datasetSize: "2,000,000 raw flights (1,942,769 clean records; 17.70% delay rate)",
    methodology: [
      "Data Cleaning: Excluded cancelled and diverted flights; removed non-operational entries and handled missing values without target contamination.",
      "Stratified Sampling: 64% Training, 16% Validation, 20% Testing split ensuring identical target ratios across partitions.",
      "Feature Engineering: Extracted departure/arrival hours; converted cyclical time into sine/cosine trigonometric transformations (DEP_HOUR_SIN/COS, ARR_HOUR_SIN/COS).",
      "Encoding & Scaling: Smoothed target encoding (smoothing factor = 20) on origin/destination airports fitted strictly on training data; one-hot encoding on airlines; 99th-percentile outlier capping; RobustScaler applied to continuous variables.",
      "Threshold Tuning: Calibrated decision threshold from 0.50 down to 0.45 to optimize positive-class recall and F1-score without compromising precision.",
      "Deployment: Designed a multi-page interactive Streamlit dashboard ('AeroPredict') with custom 5-color dark palette and Plotly visualizations."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Plotly", "Joblib"],
    models: ["HistGradientBoostingClassifier", "Logistic Regression"],
    metrics: [
      { label: "Accuracy", value: "95.61%" },
      { label: "Precision", value: "89.88%" },
      { label: "Recall", value: "84.75%" },
      { label: "F1-Score", value: "87.24%" },
      { label: "ROC-AUC", value: "98.06%" },
      { label: "PR-AUC", value: "94.64%" }
    ],
    features: [
      "Real-time what-if delay probability predictor",
      "Interactive hub & route risk explorer",
      "Airport & airline seasonal delay distributions",
      "Threshold sensitivity curve analysis"
    ],
    github: "https://github.com/ahmedashrafhaf/flight_project",
    demo: "Streamlit App (app.py)",
    keyMetric: "98.06% ROC-AUC | 95.61% Accuracy"
  },
  {
    id: "nasa-prognostics",
    title: "BEFORE ZERO – Turbofan Engine Degradation Prognostics",
    category: "ml",
    categoryLabel: "Industrial AI / Predictive Maintenance",
    bannerIcon: "fas fa-shield-halved",
    image: null,
    shortDesc: "Predictive maintenance platform predicting Remaining Useful Life (RUL) and degradation health states on NASA C-MAPSS turbofan sensor telemetry across run-to-failure cycles.",
    objective: "Forecast engine Remaining Useful Life (RUL) and classify degradation severity (Healthy, Warning, Critical) to eliminate catastrophic in-flight failures and optimize fleet maintenance schedules.",
    problem: "Aircraft engines operate under variable flight conditions with sensor noise and nonlinear wear. Over-estimating RUL risks safety hazards, while under-estimating RUL forces premature engine overhaul.",
    dataset: "NASA C-MAPSS Turbofan Jet Engine Degradation Simulation Dataset (FD001–FD004)",
    datasetSize: "53,758 total operational snapshots (43,102 train cycles, 10,656 test cycles)",
    methodology: [
      "Exploratory Data Analysis: Analyzed sensor correlations with run-to-failure cycles; calculated engine life duration trajectories.",
      "Multicollinearity & Noise Filtering: Evaluated Variance Inflation Factor (VIF); identified and pruned 7 unresponsive/noisy sensor channels (sensor_1, 5, 6, 10, 16, 18, 19).",
      "Outlier Treatment: Implemented IQR quantile clipping across 18 operational and sensor features.",
      "Class Imbalance Handling: Applied Synthetic Minority Over-sampling Technique (SMOTE) on health condition tiers (Healthy >100, Warning 51–100, Critical 0–50 cycles).",
      "Model Training: Trained a 250-estimator RandomForestRegressor on normalized telemetry matrices.",
      "Deployment: Built an industrial Streamlit monitoring dashboard ('BEFORE ZERO') with live CSV telemetry streaming and automated alert gauges."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Imbalanced-learn (SMOTE)", "Statsmodels (VIF)", "Plotly", "Streamlit", "Joblib"],
    models: ["RandomForestRegressor (250 trees)", "Degradation Health Classifier"],
    metrics: [
      { label: "RMSE", value: "36.95 cycles" },
      { label: "MAE", value: "27.40 cycles" },
      { label: "Classification Accuracy", value: "84.07%" },
      { label: "Test Engines Evaluated", value: "10,656 samples" }
    ],
    features: [
      "Dynamic Remaining Useful Life (RUL) regression",
      "3-tier automated health condition alerting (Healthy/Warning/Critical)",
      "High-contrast industrial mission-control interface",
      "CSV telemetry synchronization & real-time feature scaling"
    ],
    github: null,
    demo: "Streamlit App (nasa.py)",
    keyMetric: "36.95 RMSE | 84.07% Health Accuracy"
  },
  {
    id: "nyc-taxi-streaming",
    title: "Real-Time NYC Taxi Demand & Supply Streaming Pipeline",
    category: "streaming",
    categoryLabel: "Data Engineering / Streaming Analytics",
    bannerIcon: "fas fa-taxi",
    image: null,
    shortDesc: "Distributed real-time streaming pipeline powered by Apache Kafka, Docker, and Scikit-learn to continuously forecast zone-level taxi demand and supply imbalances across New York City.",
    objective: "Continuously forecast passenger pickup demand and available driver supply across NYC taxi zones to dynamically detect shortage bottlenecks and guide vehicle dispatching.",
    problem: "Urban transit demand spikes unpredictably based on weather, rush hours, and local events. Static scheduling causes driver shortages in high-demand zones and idle time in low-demand areas.",
    dataset: "NYC Taxi & Limousine Commission (TLC) Trip Records Dataset",
    datasetSize: "44 MB preprocessed streaming trip stream (processed_NYC.csv)",
    methodology: [
      "Distributed Infrastructure: Provisioned Apache Kafka broker and Zookeeper instances using Docker Compose.",
      "Streaming Ingestion: Built Kafka producers and consumers in Python to stream and deserialize transactional trip packets in real time.",
      "Feature Engineering: Applied online cyclical sine/cosine trigonometric encoding for pickup hour (24h), day of week (7d), and month (12m); mapped pickup zone IDs and weekend indicators.",
      "Dual Regressor Architecture: Trained separate RandomForestRegressor models (100 estimators, max depth 15) for demand and supply.",
      "Imbalance Engine: Calculated continuous hourly and daily supply-demand differentials to flag operational urgency (High Demand >100, Very High Demand >1000).",
      "Real-Time Visualization: Connected streaming consumer buffers directly into an interactive Streamlit live dashboard."
    ],
    technologies: ["Python", "Apache Kafka", "Docker", "Docker Compose", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Joblib"],
    models: ["Dual RandomForestRegressors (Demand & Supply)"],
    metrics: [
      { label: "Demand Model Max Depth", value: "15" },
      { label: "Supply Model Trees", value: "100" },
      { label: "Streaming Latency", value: "Real-time" },
      { label: "Imbalance Threshold", value: ">100 trips/hr" }
    ],
    features: [
      "Real-time Kafka consumer message processing loop",
      "Simultaneous dual-target demand and supply prediction",
      "Dynamic zone deficit / surplus calculation",
      "Live KPI metrics and dispatch alert triggers"
    ],
    github: null,
    demo: "Streamlit Dashboard (dashboard.py)",
    keyMetric: "Apache Kafka + Docker + Dual RF"
  },
  {
    id: "ecommerce-rfm",
    title: "E-Commerce Customer Segmentation & RFM Behavioral Analytics",
    category: "analytics",
    categoryLabel: "Data Science / Business Intelligence",
    bannerIcon: "fas fa-chart-pie",
    image: "assets/images/nti-dashboard-1.jpeg",
    gallery: [
      "assets/images/nti-dashboard-1.jpeg",
      "assets/images/nti-dashboard-2.jpeg",
      "assets/images/nti-dashboard-3.jpeg"
    ],
    shortDesc: "Unsupervised machine learning and customer lifetime value segmentation on ~478K retail transactions across 4,255 customers, coupled with an interactive multi-page Power BI executive dashboard.",
    objective: "Segment online retail accounts into behavioral purchasing cohorts and identify high-value customer tiers to drive retention, marketing ROI, and revenue forecasting.",
    problem: "Uncurated retail datasets suffer from date-parsing errors and unassigned customer records that distort business intelligence. Unsegmented marketing treats high-churn and VIP accounts identically, diluting promotional efficiency.",
    dataset: "Online Retail Multi-National Transactional Dataset",
    datasetSize: "~478,000 transactions across 4,255 distinct customers in 38 countries",
    methodology: [
      "Data Quality Auditing: Uncovered and resolved critical upstream date format parsing errors (eliminating a false September sales spike) and isolated 135K unassigned records into 'Unknown' to eliminate false mega-customer bias.",
      "Outlier Filtering: Applied IQR-based boundaries on unit price and order quantity.",
      "Feature Engineering: Computed Recency, Frequency, and Monetary (RFM) metrics alongside CustomerLifetime, AvgBasketValue, UniqueProducts, RepeatPurchaseRatio, and PurchaseVelocity.",
      "Feature Selection: Applied Recursive Feature Elimination (RFE) with RandomForestRegressor to identify the 6 most informative behavioral drivers.",
      "Clustering Benchmark: Evaluated KMeans, Gaussian Mixture Models (GMM), and Agglomerative Hierarchical Clustering using Silhouette, Calinski-Harabasz, and Davies-Bouldin scores.",
      "BI Dashboard: Built a 3-page interactive Microsoft Power BI executive dashboard tracking customer segments, retention cohorts, and sales drivers."
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn", "Excel"],
    models: ["Agglomerative Hierarchical Clustering", "KMeans", "Gaussian Mixture Models"],
    metrics: [
      { label: "Optimal Silhouette Score", value: "0.5042" },
      { label: "Calinski-Harabasz Score", value: "4,135.96" },
      { label: "Davies-Bouldin Index", value: "0.7568" },
      { label: "Revenue Concentration", value: "32.9% drive ~80%" }
    ],
    features: [
      "3-tier customer segmentation (VIP, Regular, Low-Value)",
      "Multi-page executive Power BI dashboard with cross-filtering",
      "Customer lifetime value and repeat purchase ratio tracking",
      "Upstream data anomaly resolution and automated audit pipeline"
    ],
    github: null,
    demo: "Power BI Executive Dashboard",
    keyMetric: "0.5042 Silhouette Score | Power BI"
  },
  {
    id: "sentinel-neo",
    title: "Project Sentinel: Automated Near-Earth Object Hazard Triage",
    category: "python",
    categoryLabel: "Pure Python / Planetary Defense",
    bannerIcon: "fas fa-meteor",
    image: null,
    shortDesc: "Zero-dependency pure Python automated pre-triage ETL pipeline ingesting NASA NeoWs REST API feeds and ground radar telemetry to detect acute planetary defense hazards.",
    objective: "Automate weekly close-approach ingestion and triage of near-Earth asteroids to filter imminent hazardous-scale passes and alleviate planetary defense analyst alert fatigue.",
    problem: "Analysts manually inspect hundreds of weekly close-approach records. Exhaustive review of nominal catalog passes causes acute operational bottlenecks and alert fatigue.",
    dataset: "NASA Near-Earth Object Web Service (NeoWs) Feed & Ground Station Tracking Logs",
    datasetSize: "Multi-window weekly astronomical feeds reconciled against ground-station logs",
    methodology: [
      "Zero-Dependency Constraint: Developed strictly in pure Python standard libraries (requests, json, csv, pathlib, math) with zero reliance on Pandas or NumPy.",
      "Multi-Source Ingestion: Chained 7-day query windows via NASA NeoWs REST API; dynamically scraped baseline catalog totals from NASA's Planetary Defense Coordination Office (PDCO) portal.",
      "Telemetry Reconciliation: Merged ground-station radar logs (Goldstone, Madrid, Canberra) while gracefully handling dropped keys and ghost IDs.",
      "Feature Engineering: Formulated custom size-to-distance threat ratio, min-max normalized threat indices, spatial approach distance categories (very_close, close, moderate, distant), and cohort median imputation.",
      "Mathematical Modeling: Formulated a deterministic dual-threshold rule (priority_watch: max diameter >= 0.14 km and miss distance <= 10 Lunar Distances) cross-validated against NASA's Potentially Hazardous Asteroid (PHA) criteria."
    ],
    technologies: ["Pure Python 3", "REST APIs (NASA NeoWs)", "Web Scraping (NASA PDCO)", "JSON / CSV Pipelines", "Standard Library"],
    models: ["Mathematical Dual-Threshold Triage Classifier"],
    metrics: [
      { label: "Analyst Workload Reduction", value: "98.48%" },
      { label: "Runtime Execution", value: "Sub-minute" },
      { label: "External Dependencies", value: "0 (Pure Python)" },
      { label: "Target Criteria", value: ">=140m & <=10 LD" }
    ],
    features: [
      "Zero-dependency deployment capability across minimal runtimes",
      "Chained multi-window REST API query handler",
      "Live web scraping integration for baseline asteroid counts",
      "Robust fault-tolerant ground radar telemetry reconciliation"
    ],
    github: "https://github.com/ahmedashrafhaf/mini_project1",
    demo: "Standalone Python Pipeline (src/pipeline.py)",
    keyMetric: "98.48% Workload Reduction | 0 Dependencies"
  },
  {
    id: "nypd-311",
    title: "NYPD 311 Municipal Service Requests Analytics & Dashboard",
    category: "analytics",
    categoryLabel: "Data Analytics / Business Intelligence",
    bannerIcon: "fas fa-city",
    image: null,
    shortDesc: "Municipal complaint analysis and operational audit across 300,000+ NYC 311 records, culminating in an executive Excel dashboard with 6 Pivot Tables and 11 Pivot Charts.",
    objective: "Audit resolution performance, identify municipal delay bottlenecks, and analyze incident volume distributions across NYC boroughs and complaint categories.",
    problem: "Municipal emergency and non-emergency agencies face heavy operational loads with delayed resolution times. City managers require transparent KPI tracking across boroughs to allocate field resources.",
    dataset: "New York City 311 Municipal Complaints Dataset",
    datasetSize: "300,698 municipal service request records across all 5 NYC boroughs",
    methodology: [
      "Data Cleansing: Standardized date formats, verified location geometries, and cleaned descriptor attributes.",
      "Calculated Metrics: Derived turnaround duration in hours, due-date compliance status (on-time vs. delayed), delay hour magnitude, and temporal categorization (month name, day of week, hour).",
      "Multi-Pivot Architecture: Structured 6 analytical Pivot Tables analyzing complaint distributions, average resolution turnaround by borough, and monthly volume curves.",
      "Executive Dashboard: Built an interactive Excel executive dashboard featuring 11 Pivot Charts, dynamic KPI cards, and borough-specific filters."
    ],
    technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Data Modeling", "Statistical Aggregation"],
    models: ["Statistical KPI & Turnaround Auditing"],
    metrics: [
      { label: "Records Analyzed", value: "300,698" },
      { label: "Analytical Pivot Tables", value: "6" },
      { label: "Interactive Pivot Charts", value: "11" },
      { label: "Boroughs Covered", value: "All 5 NYC Boroughs" }
    ],
    features: [
      "Citywide average resolution turnaround benchmark",
      "Top complaint volume rankings (Noise, Blocked Driveway, Illegal Parking)",
      "Borough-by-borough response efficiency comparison",
      "Monthly seasonal service request trend curves"
    ],
    github: null,
    demo: "Excel Dashboard (nti_ex_project.csv.xlsx)",
    keyMetric: "300K+ Records | 11 Pivot Charts"
  },
  {
    id: "bank-transactions",
    title: "Bank Customer Transactions Exploratory Analysis & Audit",
    category: "analytics",
    categoryLabel: "Data Science / Financial EDA",
    bannerIcon: "fas fa-building-columns",
    image: null,
    shortDesc: "Financial data wrangling, quality auditing, and demographic profiling on over 1,000,000 retail banking transactions in Python using Pandas, NumPy, and Seaborn.",
    objective: "Profile customer demographic distributions, validate data integrity, and examine transaction amount variances across retail banking accounts.",
    problem: "Large-scale transactional ledgers often harbor duplicate entries, null account balances, and extreme transaction skewness that distort financial forecasting.",
    dataset: "Retail Banking Customer Transaction Ledger Dataset",
    datasetSize: "1,048,567 transaction records across 884,265 unique customer accounts",
    methodology: [
      "Data Quality Auditing: Evaluated null rates, structural schema inconsistencies, and duplicate transactions.",
      "Data Cleansing: Programmed reusable Python deduplication and null imputation routines.",
      "Exploratory Data Analysis: Analyzed summary statistics across customer account balances and transaction amounts in INR.",
      "Demographic Profiling: Investigated customer distributions across genders, birth cohorts, and 9,300+ geographic locations."
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    models: ["Exploratory Statistical Analysis"],
    metrics: [
      { label: "Total Transactions", value: "1,048,567" },
      { label: "Unique Customers", value: "884,265" },
      { label: "Unique Locations", value: "9,355" },
      { label: "Pipeline Status", value: "Verified Clean" }
    ],
    features: [
      "1M+ row high-performance Pandas processing pipeline",
      "Account balance and transaction amount distribution analysis",
      "Customer demographic and spatial location mapping",
      "Modular Python cleaning function for transaction validation"
    ],
    github: null,
    demo: "Jupyter Notebook (core.ipynb)",
    keyMetric: "1M+ Transactions | 884K Customers"
  }
];

// =============================================================================
// 2. DOM INITIALIZATION & EVENT LISTENERS
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards(projectsData);
  initProjectFilters();
  initThemeToggle();
  initMobileMenu();
  initModalListeners();
  initContactForm();
});

// =============================================================================
// 3. PROJECT RENDERING & FILTERING
// =============================================================================
function renderProjectCards(projects) {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <article class="project-card" data-id="${p.id}" data-category="${p.category}">
      <div class="project-banner">
        ${p.image ? `
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        ` : `
          <div class="project-banner-fallback">
            <i class="${p.bannerIcon}"></i>
            <span>${p.categoryLabel}</span>
          </div>
        `}
      </div>
      
      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-cat">${p.categoryLabel}</span>
          <span class="project-dataset">${p.datasetSize.split('(')[0].trim()}</span>
        </div>
        
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        
        <div class="project-metric-box">
          <span class="metric-label">Key Metric / Result</span>
          <span class="metric-value">${p.keyMetric}</span>
        </div>
        
        <div class="project-tech-tags">
          ${p.technologies.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.technologies.length > 5 ? `<span class="tech-tag">+${p.technologies.length - 5}</span>` : ''}
        </div>
        
        <div class="project-footer">
          <button class="btn btn-outline btn-sm view-case-study-btn" data-id="${p.id}">
            View Case Study <i class="fas fa-arrow-right"></i>
          </button>
          
          <div class="project-card-links">
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="icon-link" title="GitHub Repository">
                <i class="fab fa-github"></i>
              </a>
            ` : ''}
            <button class="icon-link quick-view-btn" data-id="${p.id}" title="Quick Technical Details" style="background:none;border:none;cursor:pointer;">
              <i class="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Attach click events
  document.querySelectorAll(".view-case-study-btn, .quick-view-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      openProjectModal(id);
    });
  });

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", (e) => {
      // Don't trigger if clicked on an anchor tag directly
      if (e.target.closest("a")) return;
      const id = card.getAttribute("data-id");
      openProjectModal(id);
    });
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filter = btn.getAttribute("data-filter");
      if (filter === "all") {
        renderProjectCards(projectsData);
      } else {
        const filtered = projectsData.filter(p => p.category === filter);
        renderProjectCards(filtered);
      }
    });
  });
}

// =============================================================================
// 4. INTERACTIVE CASE STUDY MODAL
// =============================================================================
function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-dynamic-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="badge" style="margin-bottom:0.5rem;">${project.categoryLabel}</span>
        <h2 style="font-size:1.6rem; color:var(--text-primary); margin-top:0.25rem;">${project.title}</h2>
      </div>
      <button class="modal-close-btn" id="close-modal-x" aria-label="Close Case Study">&times;</button>
    </div>
    
    <div class="modal-body">
      <!-- High-level Metric Highlights -->
      <div class="modal-section">
        <h3 class="modal-section-title"><i class="fas fa-chart-line"></i> Verified Performance Metrics</h3>
        <div class="modal-grid-2">
          ${project.metrics.map(m => `
            <div class="modal-stat-card">
              <span class="lbl">${m.label}</span>
              <div class="val">${m.value}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Problem & Objective -->
      <div class="modal-section">
        <h3 class="modal-section-title"><i class="fas fa-bullseye"></i> Problem & Objective</h3>
        <p style="margin-bottom:0.75rem; color:var(--text-secondary); line-height:1.7;"><strong>The Challenge:</strong> ${project.problem}</p>
        <p style="color:var(--text-secondary); line-height:1.7;"><strong>Project Goal:</strong> ${project.objective}</p>
      </div>

      <!-- Dataset & Scale -->
      <div class="modal-section">
        <h3 class="modal-section-title"><i class="fas fa-database"></i> Dataset & Scale</h3>
        <p style="color:var(--text-secondary); line-height:1.7;"><strong>Source:</strong> ${project.dataset}</p>
        <p style="color:var(--text-secondary); line-height:1.7;"><strong>Volume:</strong> ${project.datasetSize}</p>
      </div>

      <!-- Methodology & Implementation -->
      <div class="modal-section">
        <h3 class="modal-section-title"><i class="fas fa-cogs"></i> Technical Implementation & Methodology</h3>
        <ul style="list-style:none; padding-left:0;">
          ${project.methodology.map(step => `
            <li style="display:flex; align-items:flex-start; gap:0.6rem; margin-bottom:0.65rem; color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">
              <i class="fas fa-check-circle" style="color:var(--accent-cyan); margin-top:0.25rem; font-size:0.9rem;"></i>
              <span>${step}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Technologies & Models -->
      <div class="modal-section">
        <h3 class="modal-section-title"><i class="fas fa-microchip"></i> Stack & Machine Learning Models</h3>
        <div style="margin-bottom:1rem;">
          <strong style="font-size:0.85rem; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:0.5rem;">Technologies & Libraries:</strong>
          <div class="project-tech-tags">
            ${project.technologies.map(t => `<span class="tech-tag" style="font-size:0.825rem; padding:0.3rem 0.65rem;">${t}</span>`).join('')}
          </div>
        </div>
        <div>
          <strong style="font-size:0.85rem; text-transform:uppercase; color:var(--text-muted); display:block; margin-bottom:0.5rem;">Algorithms & Models:</strong>
          <div class="project-tech-tags">
            ${project.models.map(m => `<span class="tech-tag" style="background:var(--accent-emerald-glow); border-color:rgba(16,185,129,0.3); color:var(--accent-emerald); font-size:0.825rem; padding:0.3rem 0.65rem;">${m}</span>`).join('')}
          </div>
        </div>
      </div>

      <!-- Visual Artifacts / Gallery if available -->
      ${project.gallery && project.gallery.length > 0 ? `
        <div class="modal-section">
          <h3 class="modal-section-title"><i class="fas fa-images"></i> Dashboard Screenshots</h3>
          <div class="modal-gallery">
            ${project.gallery.map(img => `
              <a href="${img}" target="_blank" rel="noopener noreferrer">
                <img src="${img}" alt="Project Visual" class="modal-gallery-img" loading="lazy">
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Links & Deliverables -->
      <div class="modal-section" style="margin-bottom:0; padding-top:1.5rem; border-top:1px solid var(--border-color); display:flex; gap:1rem; flex-wrap:wrap;">
        ${project.github ? `
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fab fa-github"></i> View GitHub Repository
          </a>
        ` : ''}
        ${project.demo ? `
          <span class="btn btn-outline btn-sm" style="cursor:default;">
            <i class="fas fa-desktop"></i> Deliverable: ${project.demo}
          </span>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Modal Close Listeners
  document.getElementById("close-modal-x")?.addEventListener("click", closeProjectModal);
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function initModalListeners() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });
}

// =============================================================================
// 5. THEME TOGGLE (DARK / LIGHT)
// =============================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("ahmed_portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("ahmed_portfolio_theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#theme-toggle-btn i");
  if (!icon) return;
  if (theme === "light") {
    icon.className = "fas fa-moon";
  } else {
    icon.className = "fas fa-sun";
  }
}

// =============================================================================
// 6. MOBILE MENU & SMOOTH SCROLLING
// =============================================================================
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
    const icon = menuBtn.querySelector("i");
    if (icon) {
      icon.className = navLinks.classList.contains("mobile-open") ? "fas fa-times" : "fas fa-bars";
    }
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      const icon = menuBtn.querySelector("i");
      if (icon) icon.className = "fas fa-bars";
    });
  });
}

// =============================================================================
// 7. CONTACT FORM HANDLER
// =============================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name")?.value.trim();
    const email = document.getElementById("form-email")?.value.trim();
    const subject = document.getElementById("form-subject")?.value.trim();
    const message = document.getElementById("form-message")?.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    const mailtoSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    // Open user's email client
    window.location.href = `mailto:Ahmdashraf860@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  });
}
