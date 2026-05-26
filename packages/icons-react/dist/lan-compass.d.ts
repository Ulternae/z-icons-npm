import React from 'react';

export interface LanCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompass: React.FC<LanCompassProps>;
export default LanCompass;
