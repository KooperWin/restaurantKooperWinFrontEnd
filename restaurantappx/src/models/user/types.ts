export enum SuscriptionsTypes {
  basic = "basic",
  familiar = "familiar",
  student = "student",
  enterprise = "enterprise",
}

export enum paymentTypes {
  giftCard = "giftCard",
  creditCard = "creditCard",
  debitCard = "debitCard",
}

export interface Suscription {
  type: keyof typeof SuscriptionsTypes;
  paymentType: keyof typeof paymentTypes;
  initDate: Date;
  expireDate: Date;
}

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  gender: "Male" | "Female";
  birthday: Date;
  suscription?: Suscription;
  token?: string;
  refreshToken?: string;
}
