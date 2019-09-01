import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './instagram.datasource.json';

export class InstagramDataSource extends juggler.DataSource {
  static dataSourceName = 'instagram';

  constructor(
    @inject('datasources.config.instagram', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
