import { add } from "./utils.ts";
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators";

// Business logic types and utilities
interface CounterState {
  value: number;
  stepSize: number;
  min: number;
  max: number;
  autoInterval: number;
  mode: "manual" | "auto";
  history: number[];
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

  constructor(initialValue: number = 0) {
    this.state = {
      value: initialValue,
      min: -50,
      max: 100,
      stepSize: 1,
      autoInterval: 500,
      mode: "manual",
      history: [initialValue],
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

  dispose(): void {
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

@customElement("advanced-counter")
export class AdvancedCounter extends LitElement {
  private counterLogic: CounterBusinessLogic;

  // Properties - data passed from parent components
  @property({ attribute: "comp-title", type: String })
  accessor compTitle: string = "Advanced Counter";

  @property({ attribute: "theme", type: String })
  accessor theme: string = "light";

  @property({ attribute: "disabled", type: Boolean, reflect: true })
  accessor disabled: boolean = false;

  @property({ attribute: "initial-value", type: Number })
  accessor initialValue: number = 0;

  // State - internal component state
  @state()
  accessor state: CounterState;

  @state()
  accessor stats: CounterStats;

  static override styles = css`
    /* 60-30-10 Color Rule:
      60% - Neutral backgrounds (#f5f7fa, #ffffff, #e8ecf1)
      30% - Secondary accents (#34495e, #7f8c8d)
      10% - Primary accent (#3498db) */

    :host {
      display: block;
      max-width: 800px;
      margin: 16px auto;
      padding: 32px;
      border: 1px solid #e8ecf1;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    :host([theme="dark"]) {
      background: #2c3e50;
      border-color: #34495e;
      color: #ecf0f1;
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    h2 {
      margin: 0 0 24px 0;
      text-align: center;
      color: #34495e;
      font-size: 1.75rem;
      font-weight: 600;
    }

    :host([theme="dark"]) h2 {
      color: #ecf0f1;
    }

    .counter-display {
      text-align: center;
      margin-bottom: 32px;
      padding: 24px;
      background: #f5f7fa;
      border-radius: 8px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    :host([theme="dark"]) .counter-display {
      background: #34495e;
    }

    .counter-value {
      font-size: 4rem;
      font-weight: 300;
      color: #34495e;
      margin: 16px 0;
      letter-spacing: -2px;
    }

    :host([theme="dark"]) .counter-value {
      color: #ecf0f1;
    }

    .counter-mode {
      display: inline-block;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .mode-manual {
      background-color: #e8ecf1;
      color: #34495e;
    }

    .mode-auto {
      background-color: #3498db;
      color: white;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 12px;
      margin-bottom: 24px;
    }

    button {
      padding: 14px 20px;
      border: 1px solid transparent;
      border-radius: 6px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
      background: #e8ecf1;
      color: #34495e;
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      background: #d5dce3;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-primary {
      background-color: #3498db;
      color: white;
      border-color: #3498db;
    }

    .btn-primary:hover:not(:disabled) {
      background-color: #2980b9;
      border-color: #2980b9;
    }

    .btn-secondary {
      background-color: #7f8c8d;
      color: white;
    }

    .btn-secondary:hover:not(:disabled) {
      background-color: #6c7a7b;
    }

    .btn-success {
      background-color: #e8ecf1;
      color: #34495e;
      border: 1px solid #d5dce3;
    }

    .btn-success:hover:not(:disabled) {
      background-color: #3498db;
      color: white;
      border-color: #3498db;
    }

    .btn-warning {
      background-color: #e8ecf1;
      color: #34495e;
      border: 1px solid #d5dce3;
    }

    .btn-warning:hover:not(:disabled) {
      background-color: #7f8c8d;
      color: white;
      border-color: #7f8c8d;
    }

    .btn-danger {
      background-color: #e8ecf1;
      color: #34495e;
      border: 1px solid #d5dce3;
    }

    .btn-danger:hover:not(:disabled) {
      background-color: #7f8c8d;
      color: white;
      border-color: #7f8c8d;
    }

    .settings {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
      padding: 20px;
      background-color: #f5f7fa;
      border-radius: 8px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    :host([theme="dark"]) .settings {
      background-color: #34495e;
    }

    .setting-group {
      display: flex;
      flex-direction: column;
    }

    label {
      font-weight: 500;
      margin-bottom: 8px;
      color: #34495e;
      font-size: 0.9rem;
    }

    :host([theme="dark"]) label {
      color: #bdc3c7;
    }

    input[type="number"], input[type="range"] {
      padding: 8px 12px;
      border: 1px solid #d5dce3;
      border-radius: 4px;
      font-size: 14px;
      background: white;
      color: #34495e;
    }

    :host([theme="dark"]) input[type="number"] {
      background: #2c3e50;
      color: #ecf0f1;
      border-color: #4a5f7f;
    }

    input[type="range"] {
      padding: 0;
      background: transparent;
    }

    input[type="number"]:focus, input[type="range"]:focus {
      outline: 2px solid #3498db;
      outline-offset: 2px;
    }

    .stats {
      background-color: #f5f7fa;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    }

    :host([theme="dark"]) .stats {
      background-color: #34495e;
    }

    .stats h3 {
      margin: 0 0 16px 0;
      color: #34495e;
      font-weight: 600;
      font-size: 1.1rem;
    }

    :host([theme="dark"]) .stats h3 {
      color: #ecf0f1;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
      gap: 12px;
    }

    .stat-item {
      text-align: center;
      padding: 12px;
      background-color: white;
      border-radius: 6px;
      border: 1px solid #e8ecf1;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
    }

    :host([theme="dark"]) .stat-item {
      background-color: #2c3e50;
      border-color: #4a5f7f;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: #3498db;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 0.7rem;
      color: #7f8c8d;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 500;
    }

    .bounds-indicator {
      margin: 12px 0 0 0;
      font-size: 0.9rem;
      color: #7f8c8d;
    }

    .at-limit {
      color: #3498db;
      font-weight: 600;
    }
  `;

  override connectedCallback() {
    super.connectedCallback();

    // Set up business logic when element is connected to DOM
    this.counterLogic = new CounterBusinessLogic();
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

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.counterLogic.dispose();
  }

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

  override render() {
    const isAtMin = this.state.value <= this.state.min;
    const isAtMax = this.state.value >= this.state.max;

    return html`
      <h2>${this.compTitle}</h2>
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

@customElement("counter-wrapper")
export class CounterWrapper extends LitElement {
  override render() {
    return html`
      <advanced-counter comp-title="Howdy"></advanced-counter>
    `;
  }
}

@customElement("app-home")
export class AppHome extends LitElement {
  static override styles = css`
    :host {
      font-family: sans-serif;
      text-align: center;
    }

    h1 {
      color: #333;
      margin: 0 auto;
    }
  `;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}
