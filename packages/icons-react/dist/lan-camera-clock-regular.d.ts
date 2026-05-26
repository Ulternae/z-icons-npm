import React from 'react';

export interface LanCameraClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraClockRegular: React.FC<LanCameraClockRegularProps>;
export default LanCameraClockRegular;
