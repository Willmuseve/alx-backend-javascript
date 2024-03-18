export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}
export function sumMajorCredits(sunject1: MajorCredits, subjects2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}
export function sumMinorCredits(sunject1: MinorCredits, subjects2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
