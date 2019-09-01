import {inject} from '@loopback/context';
import {InstagramService} from '../services/instagram.service';
import {get, param} from '@loopback/rest';

export class InstagramController {
  constructor(
    @inject('services.Instagram')
    private Instagram: InstagramService,
  ) {}

  @get(`/instagram/{username}`)
  async searchInstagram(@param.path.string('username') username: string) {
    return this.Instagram.getUserData(username);
  }
}
