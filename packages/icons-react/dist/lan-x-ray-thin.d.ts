import React from 'react';

export interface LanXRayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXRayThin: React.FC<LanXRayThinProps>;
export default LanXRayThin;
