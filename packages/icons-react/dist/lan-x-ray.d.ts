import React from 'react';

export interface LanXRayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXRay: React.FC<LanXRayProps>;
export default LanXRay;
