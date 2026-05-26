import React from 'react';

export interface LanCameraClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraClockThin: React.FC<LanCameraClockThinProps>;
export default LanCameraClockThin;
