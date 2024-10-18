import User from '../user/user.model';

export class ExampleService {
  async getExample(): Promise<{ message: string; userCount: number }> {
    const userCount = await User.count();
    return { message: 'Hello from Example Service!', userCount };
  }
}
