import React from 'react';

export interface LanMosquitoNetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoNetThin: React.FC<LanMosquitoNetThinProps>;
export default LanMosquitoNetThin;
