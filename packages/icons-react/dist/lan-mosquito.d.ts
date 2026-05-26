import React from 'react';

export interface LanMosquitoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquito: React.FC<LanMosquitoProps>;
export default LanMosquito;
