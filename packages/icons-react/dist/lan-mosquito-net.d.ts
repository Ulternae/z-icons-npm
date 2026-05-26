import React from 'react';

export interface LanMosquitoNetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoNet: React.FC<LanMosquitoNetProps>;
export default LanMosquitoNet;
