import { myPluginPlugin } from './plugin';

describe('gitpod', () => {
  it('should export plugin', () => {
    expect(myPluginPlugin).toBeDefined();
  });
});
