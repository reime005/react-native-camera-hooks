import { pausePreview, resumePreview } from '../preview';

describe('React Native Camera Hooks', () => {
  test('pausePreview wrong ref', async () => {
    let fakeRef = {};

    let res = await pausePreview({
      cameraRef: fakeRef,
    });

    expect(res).toEqual(false);

    fakeRef = { current: null };

    res = await pausePreview({
      cameraRef: fakeRef,
    });

    expect(res).toEqual(false);
  });

  test('pausePreview correct ref', async () => {
    const fakeRef = {
      current: {
        pausePreview: () => {},
      },
    };

    const res = await pausePreview({
      cameraRef: fakeRef,
    });

    expect(res).toEqual(true);
  });

  test('resumePreview wrong ref', async () => {
    let fakeRef = {};

    let res = await resumePreview({
      cameraRef: fakeRef,
    });

    expect(res).toEqual(false);

    fakeRef = { current: null };

    res = await resumePreview({
      cameraRef: fakeRef,
    });

    expect(res).toEqual(false);
  });

  test('resumePreview correct ref', async () => {
    const fakeRef = {
      current: {
        resumePreview: () => {},
      },
    };

    const res = await resumePreview({
      cameraRef: fakeRef,
    });

    expect(res).toEqual(true);
  });
});
