// "use server";
// import { cookies } from "next/headers";

// // Cookie set etme (genel)
// export async function setCookie(name: string, value: string, valueKey: string = "value") {
//   const cookieStore = await cookies();
//   cookieStore.set({
//     name,
//     value: JSON.stringify({ [valueKey]: value }), // value yerine valueKey kullan
//     path: "/",
//     httpOnly: false,
//   });
// }

// // Cookie silme
// export async function removeCookie(name: string) {
//   const cookieStore = await cookies();
//   cookieStore.set({
//     name,
//     value: "",
//     path: "/",
//     expires: new Date(0),
//   });
// }

// // Cookie okuma
// export async function getCookie(name: string, valueKey: string = "value"): Promise<string | null> {
//   const cookieStore = await cookies();
//   const cookie = cookieStore.get(name);
//   if (!cookie) return null;

//   try {
//     const parsed = JSON.parse(cookie.value);
//     return parsed[valueKey] ?? null;
//   } catch {
//     return null;
//   }
// }

// // Yanlış cevap sayısını artırma
// export async function incrementWrongAnswer(): Promise<number> {
//   const cookieStore = await cookies();
//   const cookie = cookieStore.get("wrongAnswerCount");

//   let count = 0;
//   if (cookie) {
//     try {
//       const parsed = JSON.parse(cookie.value);
//       count = parseInt(parsed.valueWrongAnswer ?? "0", 10);
//     } catch {}
//   }

//   count += 1;

//   cookieStore.set({
//     name: "wrongAnswerCount",
//     value: JSON.stringify({ valueWrongAnswer: count }),
//     path: "/",
//     httpOnly: false,
//   });

//   return count;
// }

// // Yanlış cevap sayısını sıfırlama
// export async function resetWrongAnswer() {
//   const cookieStore = await cookies();
//   cookieStore.set({
//     name: "wrongAnswerCount",
//     value: JSON.stringify({ valueWrongAnswer: "0" }),
//     path: "/",
//     httpOnly: false,
//   });
// }

// // Doğru cevabı cookie’ye kaydetme
// export async function setCorrectAnswer(answer: string) {
//   const cookieStore = await cookies();
//   cookieStore.set({
//     name: "userAnswer",
//     value: JSON.stringify({ valueAnswer: answer }),
//     path: "/",
//     httpOnly: false,
//   });
// }

// // Doğru cevabı silme
// export async function removeCorrectAnswer() {
//   const cookieStore = await cookies();
//   cookieStore.set({
//     name: "userAnswer",
//     value: "",
//     path: "/",
//     expires: new Date(0),
//   });
// }


// utils/cookie.ts

// Cookie kaydet
// utils/cookie.ts
// utils/cookie.ts
// utils/cookie.ts
// utils/cookie.ts
// utils/cookie.ts
export function setCookie(name: string, value: any) {
  document.cookie = `${name}=${encodeURIComponent(value.toString())}; path=/`;
}

export function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

