const CLEAR_SCREEN = true;
const NOT_CLEAR_SCREEN = false;

export default class CalculatorModel {
    #value: string;
    #accumulator: number;
    #clearDisplay: boolean;
    #operation: string;

    constructor(value: string = null, accumulator: number = null, operation: string = null, clearDisplay = false) {
        this.#value = value;
        this.#accumulator = accumulator;
        this.#operation = operation;
        this.#clearDisplay = clearDisplay;
    }

    get value() {
        if (!this.#value && this.#accumulator) return this.#accumulator;
        return this.#value?.replace('.', ',') || '0';
    }

    get completeOperation() {
        return `${this.#accumulator ?? ''} ${this.#operation ?? ''} ${this.#value ? this.#value.replace('.', ',') : ''}`;
    }

    textNumber(newValue: string) {
        return new CalculatorModel(
            (this.#clearDisplay || !this.#value) ? newValue : this.#value + newValue,
            this.#accumulator,
            this.#operation,
            NOT_CLEAR_SCREEN
        );
    }

    addDot() {
        return new CalculatorModel(
            this.#value?.includes('.') ? this.#value : this.#value + '.',
            this.#accumulator,
            this.#operation,
            NOT_CLEAR_SCREEN
        );
    }

    clearScreen() {
        return new CalculatorModel();
    }

    textOperation(nextOperation: string) {
        return this.calculate(nextOperation);
    }

    calculate(nextOperation: string = null) {
        if (this.#value == null) this.#value = "0";
        const accumulator = !this.#operation
            ? parseFloat(this.#value)
            : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`);
        const value = !this.#operation ? this.#value : String(accumulator);
        
        return new CalculatorModel(
            !this.#operation ?  null : nextOperation ? null : value,
            !this.#operation ? accumulator : nextOperation ? value : null,
            nextOperation,
            nextOperation ? CLEAR_SCREEN : NOT_CLEAR_SCREEN
        );
    }
}