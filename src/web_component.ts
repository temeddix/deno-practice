import { add } from "@/site";
import { css, html, LitElement } from "lit";

// Business logic types and utilities
interface CounterState {
  value: number;
  history: number[];
  mode: "manual" | "auto";
  stepSize: number;
  min: number;
  max: number;
  autoInterval: number;
}

interface CounterStats {
  total: number;
  average: number;
  changes: number;
  peak: number;
  valley: number;
}

class CounterBusinessLogic {
  private state: CounterState;
  private autoTimer?: number;
  private changeCallbacks: Array<(state: CounterState) => void> = [];

  constructor(initialState: Partial<CounterState> = {}) {
    this.state = {
      value: 0,
      history: [0],
      mode: "manual",
      stepSize: 1,
      min: -Infinity,
      max: Infinity,
      autoInterval: 1000,
      ...initialState,
    };
  }

  getState(): CounterState {
    return { ...this.state };
  }

  increment(): boolean {
    return this.changeValue(this.state.value + this.state.stepSize);
  }

  decrement(): boolean {
    return this.changeValue(this.state.value - this.state.stepSize);
  }

  reset(): void {
    this.changeValue(0);
    this.state.history = [0];
    this.notifyChange();
  }

  setStepSize(step: number): void {
    this.state.stepSize = Math.max(1, step);
    this.notifyChange();
  }

  setBounds(min: number, max: number): void {
    this.state.min = min;
    this.state.max = max;
    // Clamp current value to new bounds
    this.changeValue(Math.max(min, Math.min(max, this.state.value)));
  }

  toggleMode(): void {
    this.state.mode = this.state.mode === "manual" ? "auto" : "manual";
    if (this.state.mode === "auto") {
      this.startAutoIncrement();
    } else {
      this.stopAutoIncrement();
    }
    this.notifyChange();
  }

  setAutoInterval(interval: number): void {
    this.state.autoInterval = Math.max(100, interval);
    if (this.state.mode === "auto") {
      this.stopAutoIncrement();
      this.startAutoIncrement();
    }
    this.notifyChange();
  }

  getStatistics(): CounterStats {
    const history = this.state.history;
    return {
      total: history.reduce((sum, val) => add(sum, val), 0),
      average: history.length > 0
        ? history.reduce((sum, val) => sum + val, 0) / history.length
        : 0,
      changes: history.length - 1,
      peak: Math.max(...history),
      valley: Math.min(...history),
    };
  }

  undo(): boolean {
    if (this.state.history.length > 1) {
      this.state.history.pop();
      this.state.value = this.state.history[this.state.history.length - 1];
      this.notifyChange();
      return true;
    }
    return false;
  }

  onStateChange(callback: (state: CounterState) => void): void {
    this.changeCallbacks.push(callback);
  }

  destroy(): void {
    this.stopAutoIncrement();
    this.changeCallbacks = [];
  }

  private changeValue(newValue: number): boolean {
    const clampedValue = Math.max(
      this.state.min,
      Math.min(this.state.max, newValue),
    );
    if (clampedValue !== this.state.value) {
      this.state.value = clampedValue;
      this.state.history.push(clampedValue);
      // Keep history manageable
      if (this.state.history.length > 100) {
        this.state.history = this.state.history.slice(-50);
      }
      this.notifyChange();
      return true;
    }
    return false;
  }

  private startAutoIncrement(): void {
    this.autoTimer = setInterval(() => {
      this.increment();
    }, this.state.autoInterval);
  }

  private stopAutoIncrement(): void {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = undefined;
    }
  }

  private notifyChange(): void {
    this.changeCallbacks.forEach((callback) => callback(this.getState()));
  }
}

export class AdvancedCounter extends LitElement {
  private counterLogic: CounterBusinessLogic;
  private state: CounterState;
  private stats: CounterStats;

  static override properties = {
    state: { type: Object },
    stats: { type: Object },
  };

  constructor() {
    super();
    this.counterLogic = new CounterBusinessLogic({
      min: -50,
      max: 100,
      stepSize: 1,
      autoInterval: 500,
    });
    this.state = this.counterLogic.getState();
    this.stats = this.counterLogic.getStatistics();

    // Listen for state changes
    this.counterLogic.onStateChange((newState) => {
      this.state = newState;
      this.stats = this.counterLogic.getStatistics();
      this.requestUpdate();

      // Dispatch custom event for parent components
      this.dispatchEvent(
        new CustomEvent("counter-changed", {
          detail: { value: newState.value, stats: this.stats },
          bubbles: true,
        }),
      );
    });
  }

  static override styles = css`
    :host {
      display: block;
      padding: 24px;
      border: 3px solid #2196f3;
      border-radius: 12px;
      margin: 16px 0;
      background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    .counter-display {
      text-align: center;
      margin-bottom: 20px;
    }

    .counter-value {
      font-size: 3rem;
      font-weight: bold;
      color: #1976d2;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin: 10px 0;
    }

    .counter-mode {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .mode-manual {
      background-color: #4caf50;
      color: white;
    }

    .mode-auto {
      background-color: #ff9800;
      color: white;
      animation: pulse 1s infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
      margin-bottom: 20px;
    }

    button {
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .btn-primary {
      background-color: #2196f3;
      color: white;
    }

    .btn-secondary {
      background-color: #757575;
      color: white;
    }

    .btn-success {
      background-color: #4caf50;
      color: white;
    }

    .btn-warning {
      background-color: #ff9800;
      color: white;
    }

    .btn-danger {
      background-color: #f44336;
      color: white;
    }

    .settings {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
      padding: 16px;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 8px;
    }

    .setting-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: bold;
      margin-bottom: 4px;
      color: #424242;
    }

    input[type="number"], input[type="range"] {
      padding: 8px;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    input[type="range"] {
      padding: 0;
    }

    .stats {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 16px;
      border-radius: 8px;
      border-left: 4px solid #2196f3;
    }

    .stats h3 {
      margin-top: 0;
      color: #1976d2;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
    }

    .stat-item {
      text-align: center;
      padding: 8px;
      background-color: #f8f9fa;
      border-radius: 6px;
    }

    .stat-value {
      font-size: 1.2rem;
      font-weight: bold;
      color: #2196f3;
    }

    .stat-label {
      font-size: 0.8rem;
      color: #666;
      text-transform: uppercase;
    }

    .bounds-indicator {
      margin: 8px 0;
      font-size: 0.9rem;
      color: #666;
    }

    .at-limit {
      color: #f44336;
      font-weight: bold;
    }
  `;

  private handleIncrement() {
    this.counterLogic.increment();
  }

  private handleDecrement() {
    this.counterLogic.decrement();
  }

  private handleReset() {
    this.counterLogic.reset();
  }

  private handleUndo() {
    this.counterLogic.undo();
  }

  private handleModeToggle() {
    this.counterLogic.toggleMode();
  }

  private handleStepChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.counterLogic.setStepSize(parseInt(target.value) || 1);
  }

  private handleIntervalChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.counterLogic.setAutoInterval(parseInt(target.value) || 500);
  }

  private handleMinChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const min = parseInt(target.value) || -50;
    this.counterLogic.setBounds(min, this.state.max);
  }

  private handleMaxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const max = parseInt(target.value) || 100;
    this.counterLogic.setBounds(this.state.min, max);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.counterLogic.destroy();
  }

  override render() {
    const isAtMin = this.state.value <= this.state.min;
    const isAtMax = this.state.value >= this.state.max;

    return html`
      <div class="counter-display">
        <div class="counter-mode ${this.state.mode === "auto"
        ? "mode-auto"
        : "mode-manual"}">
          ${this.state.mode} mode
        </div>
        <div class="counter-value">${this.state.value}</div>
        <div class="bounds-indicator">
          Range: ${this.state.min} to ${this.state.max} ${isAtMin || isAtMax
        ? html`
          <span class="at-limit">(at limit!)</span>
        `
        : ""}
        </div>
      </div>

      <div class="controls">
        <button
          class="btn-primary"
          @click="${this.handleDecrement}"
          ?disabled="${isAtMin}"
        >
          ➖ Decrease
        </button>
        <button
          class="btn-primary"
          @click="${this.handleIncrement}"
          ?disabled="${isAtMax}"
        >
          ➕ Increase
        </button>
        <button class="btn-secondary" @click="${this.handleUndo}">
          ↶ Undo
        </button>
        <button class="btn-danger" @click="${this.handleReset}">
          🔄 Reset
        </button>
        <button
          class="btn-${this.state.mode === "auto" ? "warning" : "success"}"
          @click="${this.handleModeToggle}"
        >
          ${this.state.mode === "auto" ? "⏸️ Stop Auto" : "▶️ Start Auto"}
        </button>
      </div>

      <div class="settings">
        <div class="setting-group">
          <label>Step Size: ${this.state.stepSize}</label>
          <input
            type="range"
            min="1"
            max="10"
            .value="${this.state.stepSize.toString()}"
            @input="${this.handleStepChange}"
          />
        </div>
        <div class="setting-group">
          <label>Auto Interval: ${this.state.autoInterval}ms</label>
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            .value="${this.state.autoInterval.toString()}"
            @input="${this.handleIntervalChange}"
          />
        </div>
        <div class="setting-group">
          <label>Min Value</label>
          <input
            type="number"
            .value="${this.state.min.toString()}"
            @change="${this.handleMinChange}"
          />
        </div>
        <div class="setting-group">
          <label>Max Value</label>
          <input
            type="number"
            .value="${this.state.max.toString()}"
            @change="${this.handleMaxChange}"
          />
        </div>
      </div>

      <div class="stats">
        <h3>📊 Statistics</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">${this.stats.total}</div>
            <div class="stat-label">Total Sum</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.average.toFixed(1)}</div>
            <div class="stat-label">Average</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.changes}</div>
            <div class="stat-label">Changes</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.peak}</div>
            <div class="stat-label">Peak</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.stats.valley}</div>
            <div class="stat-label">Valley</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.state.history.length}</div>
            <div class="stat-label">History Size</div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("advanced-counter", AdvancedCounter);
