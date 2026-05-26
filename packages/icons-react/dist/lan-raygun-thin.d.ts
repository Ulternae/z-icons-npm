import React from 'react';

export interface LanRaygunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaygunThin: React.FC<LanRaygunThinProps>;
export default LanRaygunThin;
