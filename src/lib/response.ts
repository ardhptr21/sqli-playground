import { NextResponse } from "next/server";

export interface IResponsePayload<T = unknown> {
  message: string;
  status: number;
  success: boolean;
  data?: T;
}

export class Response {
  message: string;
  status: number;
  success: boolean;
  data: unknown = null;

  constructor(message: string, status: number, success: boolean) {
    this.message = message;
    this.status = status;
    this.success = success;
  }

  setData<T>(data: T) {
    this.data = data;
    return this;
  }

  setStatus(status: number) {
    this.status = status;
    return this;
  }

  send() {
    const payload: IResponsePayload = {
      message: this.message,
      status: this.status,
      success: this.success,
    };
    if (this.data) {
      payload.data = this.data;
    }
    return NextResponse.json(payload);
  }

  static success(message: string) {
    return new Response(message, 200, true);
  }

  static failed(message: string) {
    return new Response(message, 400, false);
  }
}
