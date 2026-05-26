import React from 'react';

export interface LanMosquitoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoThin: React.FC<LanMosquitoThinProps>;
export default LanMosquitoThin;
