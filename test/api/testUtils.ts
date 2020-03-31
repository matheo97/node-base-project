/* eslint-disable max-classes-per-file */
import { Application, Request, Response } from 'express';
import { middlewareErrorHandler } from '../../src/utils/errorHandler';
import { OutgoingHttpHeaders } from 'http';
import { Socket } from 'net';

function defaultNextFunction(req: Request, res: Response) {
  return (err: any): void => {
    if (err) {
      middlewareErrorHandler(err, req, res, () => { /* blank */ });
    }
  };
}

export class CustomTestResponse implements Response {
  public body: any;
  public statusCode: number;
  public headers: {[key: string]: number | string | string[]};
  constructor() {
    this.body = null;
    this.statusCode = 418;
    this.headers = {};
  }
  public json(result: any): this {
    this.body = result;

    return this;
  }
  public status(code: number): this {
    this.statusCode = code;

    return this;
  }
  public redirect(url: string, status?: number): this;
  public redirect(status: number, url: string): this;
  public redirect(a: string | number, b?: string | number): this {
    if (b) {
      if (typeof a === 'number') {
        this.statusCode = a;
        this.headers.location = b as string;
      } else {
        this.headers.location = a;
        this.statusCode = b as number;
      }
    } else {
      this.redirect(a as string, 302);
    }

    return this;
  }
  public setHeader(name: string, value: number | string | string[]): void {
    this.headers[name.toLocaleLowerCase()] = value;

    return;
  }

  // implement these if you need to use them and move them up
  // tslint:disable-next-line: member-ordering
  public req?: Request;
  // tslint:disable-next-line: member-ordering
  public app: Application = {} as Application;
  // tslint:disable-next-line: member-ordering
  public charset = '';
  // tslint:disable-next-line: member-ordering
  public locals: any = {};
  // tslint:disable-next-line: member-ordering
  public headersSent = false;
  // tslint:disable-next-line: member-ordering
  public socket = new Socket();
  // tslint:disable-next-line: member-ordering
  public writableCorked = 1;
  // tslint:disable-next-line: member-ordering
  public statusMessage = '';
  // tslint:disable-next-line: member-ordering
  public upgrading = false;
  // tslint:disable-next-line: member-ordering
  public chunkedEncoding = false;
  // tslint:disable-next-line: member-ordering
  public shouldKeepAlive = false;
  // tslint:disable-next-line: member-ordering
  public useChunkedEncodingByDefault = false;
  // tslint:disable-next-line: member-ordering
  public sendDate = false;
  // tslint:disable-next-line: member-ordering
  public finished = false;
  // tslint:disable-next-line: member-ordering
  public connection: Socket = {} as Socket;
  // tslint:disable-next-line: member-ordering
  public writable = false;
  // tslint:disable-next-line: member-ordering
  public readonly writableHighWaterMark: number = NaN;
  // tslint:disable-next-line: member-ordering
  public readonly writableLength: number = NaN;
  // tslint:disable-next-line: member-ordering
  public readonly writableFinished: boolean = true;
  public writeProcessing(): this {
    throw new Error(`haven't implemented '${this.sendStatus.name}' yet`);
  }
  public writableEnded: any = new Error(`haven't implemented '${this.sendStatus.name}' yet`);
  public writableObjectMode: any =
  new Error(`haven't implemented '${this.sendStatus.name}' yet`);
  public destroyed: any = new Error(`haven't implemented '${this.sendStatus.name}' yet`);
  public sendStatus(): this {
    throw new Error(`haven't implemented '${this.sendStatus.name}' yet`);
  }
  public links(): this {
    throw new Error(`haven't implemented '${this.links.name}' yet`);
  }
  public send(): this {
    throw new Error(`haven't implemented '${this.send.name}' yet`);
  }
  public jsonp(): this {
    throw new Error(`haven't implemented '${this.jsonp.name}' yet`);
  }
  public sendFile(): void {
    throw new Error(`haven't implemented '${this.sendFile.name}' yet`);
  }
  public sendfile(): void {
    throw new Error(`haven't implemented '${this.sendfile.name}' yet`);
  }
  public download(): void {
    throw new Error(`haven't implemented ${this.download.name} yet`);
  }
  public contentType(): this {
    throw new Error(`haven't implemented ${this.contentType.name} yet`);
  }
  public type(): this {
    throw new Error(`haven't implemented ${this.type.name} yet`);
  }
  public format(): this {
    throw new Error(`haven't implemented ${this.format.name} yet`);
  }
  public attachment(): this {
    throw new Error(`haven't implemented ${this.attachment.name} yet`);
  }
  public set(): this {
    throw new Error(`haven't implemented ${this.set.name} yet`);
  }
  public header(): this {
    throw new Error(`haven't implemented ${this.header.name} yet`);
  }
  public get(): string {
    throw new Error(`haven't implemented ${this.get.name} yet`);
  }
  public clearCookie(): this {
    throw new Error(`haven't implemented ${this.clearCookie.name} yet`);
  }
  public cookie(): this {
    throw new Error(`haven't implemented ${this.cookie.name} yet`);
  }
  public location(): this {
    throw new Error(`haven't implemented ${this.location.name} yet`);
  }
  public render(): void {
    throw new Error(`haven't implemented ${this.render.name} yet`);
  }
  public vary(): this {
    throw new Error(`haven't implemented ${this.vary.name} yet`);
  }
  public append(): this {
    throw new Error(`haven't implemented ${this.append.name} yet`);
  }
  public assignSocket(): void {
    throw new Error(`haven't implemented ${this.assignSocket.name} yet`);
  }
  public detachSocket(): void {
    throw new Error(`haven't implemented ${this.detachSocket.name} yet`);
  }
  public writeContinue(): void {
    throw new Error(`haven't implemented ${this.writeContinue.name} yet`);
  }
  public writeHead(): this {
    throw new Error(`haven't implemented ${this.writeHead.name} yet`);
  }
  public setTimeout(): this {
    throw new Error(`haven't implemented ${this.setTimeout.name} yet`);
  }
  public getHeader(): number | string | string[] | undefined {
    throw new Error(`haven't implemented ${this.getHeader.name} yet`);
  }
  public getHeaders(): OutgoingHttpHeaders {
    throw new Error(`haven't implemented ${this.getHeaders.name} yet`);
  }
  public getHeaderNames(): string[] {
    throw new Error(`haven't implemented ${this.getHeaderNames.name} yet`);
  }
  public hasHeader(): boolean {
    throw new Error(`haven't implemented ${this.hasHeader.name} yet`);
  }
  public removeHeader(): void {
    throw new Error(`haven't implemented ${this.removeHeader.name} yet`);
  }
  public addTrailers(): void {
    throw new Error(`haven't implemented ${this.addTrailers.name} yet`);
  }
  public flushHeaders(): void {
    throw new Error(`haven't implemented ${this.flushHeaders.name} yet`);
  }
  public _write(): void {
    throw new Error(`haven't implemented ${this._write.name} yet`);
  }
  public _destroy(): void {
    throw new Error(`haven't implemented ${this._destroy.name} yet`);
  }
  public _final(): void {
    throw new Error(`haven't implemented ${this._final.name} yet`);
  }
  public write(): boolean {
    throw new Error(`haven't implemented ${this.write.name} yet`);
  }
  public setDefaultEncoding(): this {
    throw new Error(`haven't implemented ${this.setDefaultEncoding.name} yet`);
  }
  public end(): void {
    throw new Error(`haven't implemented ${this.end.name} yet`);
  }
  public cork(): void {
    throw new Error(`haven't implemented ${this.cork.name} yet`);
  }
  public uncork(): void {
    throw new Error(`haven't implemented ${this.uncork.name} yet`);
  }
  public destroy(): void {
    throw new Error(`haven't implemented ${this.destroy.name} yet`);
  }
  public addListener(): this {
    throw new Error(`haven't implemented ${this.addListener.name} yet`);
  }
  public on(): this {
    throw new Error(`haven't implemented ${this.on.name} yet`);
  }
  public once(): this {
    throw new Error(`haven't implemented ${this.once.name} yet`);
  }
  public removeListener(): this {
    throw new Error(`haven't implemented ${this.removeListener.name} yet`);
  }
  public off(): this {
    throw new Error(`haven't implemented ${this.off.name} yet`);
  }
  public removeAllListeners(): this {
    throw new Error(`haven't implemented ${this.removeAllListeners.name} yet`);
  }
  public setMaxListeners(): this {
    throw new Error(`haven't implemented ${this.setMaxListeners.name} yet`);
  }
  public getMaxListeners(): number {
    throw new Error(`haven't implemented ${this.getMaxListeners.name} yet`);
  }
  public listeners(): (() => any)[] {
    throw new Error(`haven't implemented ${this.listeners.name} yet`);
  }
  public rawListeners(): (() => any)[] {
    throw new Error(`haven't implemented ${this.rawListeners.name} yet`);
  }
  public emit(): boolean {
    throw new Error(`haven't implemented ${this.emit.name} yet`);
  }
  public listenerCount(): number {
    throw new Error(`haven't implemented ${this.listenerCount.name} yet`);
  }
  public prependListener(): this {
    throw new Error(`haven't implemented ${this.prependListener.name} yet`);
  }
  public prependOnceListener(): this {
    throw new Error(`haven't implemented ${this.prependOnceListener.name} yet`);
  }
  public eventNames(): (string | symbol)[] {
    throw new Error(`haven't implemented ${this.eventNames.name} yet`);
  }
  public pipe<T extends NodeJS.WritableStream>(): T {
    throw new Error(`haven't implemented ${this.pipe.name} yet`);
  }
  // template for adding a function that is required for our interfaces/extensions.
  public future(): void {
    throw new Error(`haven't implemented ${this.future.name} yet`);
  }
}

export class TestHarness {

  public static async makeRequest(options: any): Promise<CustomTestResponse> {
    // setup
    if (options.req.hasOwnProperty('query')) {
      options.req.qs = options.req.query;
    }
    const req = options.req;
    req.method = options.method;
    req.path = options.uri;

    // request
    const res = new CustomTestResponse();
    switch (options.method) {
      case 'GET':
        await options.endpoint.GET(req, res, defaultNextFunction(req, res));
        break;
      case 'POST':
        await options.endpoint.POST(req, res, defaultNextFunction(req, res));
        break;
      case 'PUT':
        await options.endpoint.PUT(req, res, defaultNextFunction(req, res));
        break;
      case 'DELETE':
        await options.endpoint.DELETE(req, res, defaultNextFunction(req, res));
        break;
    }

    return res;
  }
}
