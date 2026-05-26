import React from 'react';

export interface LanCameraAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraAltThin: React.FC<LanCameraAltThinProps>;
export default LanCameraAltThin;
