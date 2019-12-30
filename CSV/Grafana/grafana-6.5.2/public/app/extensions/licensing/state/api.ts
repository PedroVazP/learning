import { getBackendSrv } from 'app/core/services/backend_srv';

export interface LicenseToken {
  jti: string;
  iss: string;
  sub: string;
  iat: number;
  exp: number;
  nbf: number;
  lexp: number;
  lid: number;
  max_users: number;
  prod: string[];
  company: string;
}

export const getLicenseToken = async (): Promise<LicenseToken> => {
  return await getBackendSrv().get('/api/licensing/token');
};
