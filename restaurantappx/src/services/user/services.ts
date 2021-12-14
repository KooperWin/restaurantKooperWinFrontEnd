import { User } from "../../models/user/types";

export const login = async (
  basicUser: Partial<User>
): Promise<Partial<User>> => {
  const response = await fetch("http://104.237.129.63:8013/api/token/", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(basicUser),
  });

  if (basicUser.email && basicUser.password && response.status === 200) {
    const tokens: { access: string; refresh: string } = await response.json();
    console.log(tokens);
    
    const logUser: Partial<User> = {
      email: basicUser.email,
      password: basicUser.password,
      token: tokens.access,
      refreshToken: tokens.refresh,
    };

    return logUser;
  } else {
    throw new Error("Escribe tu Email y contraseña");
  }
};

export const signin = async (
  basicUser: Partial<User>
): Promise<Partial<User>> => {
  const response = await fetch(
    "http://104.237.129.63:8013/api/users/register",
    {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(basicUser),
    }
  );

  if (basicUser.email && basicUser.password && response.status === 200) {
    const tokens: { access: string; refresh: string } = await response.json();

    const logUser: Partial<User> = {
      email: basicUser.email,
      password: basicUser.password,
      token: tokens.access,
      refreshToken: tokens.refresh,
    };

    return logUser;
  } else {
    throw new Error("Escribe tu Email y contraseña");
  }
};

export const getInfoUser = async (
  basicUser: Partial<User>
): Promise<Partial<User>> => {
  const response = await fetch("http://104.237.129.63:8013/api/users/login", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(basicUser),
  });

  if (basicUser.email && basicUser.password && response.status === 200) {
    const infoUser: User = await response.json();
    return infoUser;
  } else {
    throw new Error("Error en solicitud");
  }
};
