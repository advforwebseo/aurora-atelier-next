export type AuthResponse =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      error: string;
    };
