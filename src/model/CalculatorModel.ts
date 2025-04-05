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
        return this.#value?.replace('.', ',') || '0';
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
}