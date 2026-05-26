import React from 'react';

export interface LanCameraClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraClock: React.FC<LanCameraClockProps>;
export default LanCameraClock;
