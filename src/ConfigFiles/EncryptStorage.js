import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = new EncryptStorage('secret-key123', {
  storageType: 'localStorage',
});
