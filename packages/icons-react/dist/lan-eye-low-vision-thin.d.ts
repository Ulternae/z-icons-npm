import React from 'react';

export interface LanEyeLowVisionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyeLowVisionThin: React.FC<LanEyeLowVisionThinProps>;
export default LanEyeLowVisionThin;
