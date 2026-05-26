import React from 'react';

export interface LanXRayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXRayRegular: React.FC<LanXRayRegularProps>;
export default LanXRayRegular;
