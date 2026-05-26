import React from 'react';

export interface LanCameraCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircle: React.FC<LanCameraCircleProps>;
export default LanCameraCircle;
