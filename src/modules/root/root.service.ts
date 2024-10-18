export class RootService {
  async getHelloWorld(): Promise<{ message: string }> {
    return { message: 'Hello World' };
  }
}
