export class StorageService {
  public static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  public static setAccessToken(token: string) {
    return localStorage.setItem('accessToken', token);
  }
}
