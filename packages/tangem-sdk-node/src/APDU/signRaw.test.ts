import { signRaw } from './signRaw';
import { NFC } from 'nfc-pcsc';
// import { tlvToObject } from '../TLV';

// const logger = console;
const nfc = new NFC();
// logger // optionally you can pass logger

describe('signRaw', () => {
  it('signRaw', (done: any) => {
    nfc.on('reader', (reader: any) => {
      reader.autoProcessing = false;
      reader.on('card', async () => {
        // const createVerifyData =
        //   '2705649CD255A07EFDF3528B4D63FB60CE18C85E403F66D3BA7F1F63D476A3E34225F6F5659785180C313895EEFEB1B4340E897210C7F770BE2A1C7142435B9E';
        const createVerifyData =
          '65794a68624763694f694a465a45525451534973496d49324e4349365a6d467363325573496d4e79615851694f6c7369596a5930496c31392ee511ffbb92a58dc5c01ebefd6e47ccabb82069ff65ac196c2aca24197b850c6c5db18d6c02aadf5fa707c0f74750dbb149cb5819a1e2faaa5f1a858c01cf0457';

        const pin1 = '000000';
        const pin2 = '000';
        const hashAlg = 'sha-512';
        const response = await signRaw(
          reader,
          createVerifyData,
          pin1,
          pin2,
          hashAlg
        );
        expect(response.length).toBe(156);
        done();
      });
    });
  });
});
