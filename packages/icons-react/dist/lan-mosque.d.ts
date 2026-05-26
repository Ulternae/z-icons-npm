import React from 'react';

export interface LanMosqueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosque: React.FC<LanMosqueProps>;
export default LanMosque;
