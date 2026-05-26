import React from 'react';

export interface LanEyeLowVisionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeLowVision: React.FC<LanEyeLowVisionProps>;
export default LanEyeLowVision;
