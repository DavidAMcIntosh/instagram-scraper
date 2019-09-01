import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {InstagramDataSource} from '../datasources';

export interface InstagramService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getUserData(username: string): Promise<any>;
}

export class InstagramProvider implements Provider<InstagramService> {
  constructor(
    // instagram must match the name property in the datasource json file
    @inject('datasources.instagram')
    protected dataSource: InstagramDataSource = new InstagramDataSource(),
  ) {}

  value(): Promise<InstagramService> {
    return getService(this.dataSource);
  }
}
