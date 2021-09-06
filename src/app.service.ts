import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import RepoService from './repo.service';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }

@Injectable()
export class AppService {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => String)
  async getHello(): Promise<string> {
    return `Total message are ${await this.repoService.messageRepo.count()}`;
  }
}
