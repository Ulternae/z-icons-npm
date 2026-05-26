import React from 'react';

export interface LanCameraWebThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebThin: React.FC<LanCameraWebThinProps>;
export default LanCameraWebThin;
