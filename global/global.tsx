// // global.ts
// let answerValue = "";

// export const gAnswerText = {
//   get: () => answerValue,
//   set: (val: string) => {
//     answerValue = val;
//     ("Global answer updated:", answerValue);
//   },
// };

class GlobalState<T> {
    private value: T;
    private listeners: ((val: T) => void)[] = [];
  
    constructor(initialValue: T) {
      this.value = initialValue;
    }
  
    get() {
      return this.value;
    }
  
    set(val: T) {
      this.value = val;
      this.listeners.forEach((listener) => listener(val));
    }
  
    subscribe(listener: (val: T) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
  }
  
  // Doğru cevap için zaten kullanılıyor
  export const gAnswerText = new GlobalState<string>("");
  
  // Yeni: Yanlış cevap sayısı için
  export const gWrongAnswerCount = new GlobalState<number>(0);
  
  export const gAnswer = new GlobalState<string>("");

  export const gIsCorrect = new GlobalState<boolean>(false)