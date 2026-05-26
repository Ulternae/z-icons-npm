import React from 'react';

export interface LanCameraViewfinderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraViewfinderThin: React.FC<LanCameraViewfinderThinProps>;
export default LanCameraViewfinderThin;
