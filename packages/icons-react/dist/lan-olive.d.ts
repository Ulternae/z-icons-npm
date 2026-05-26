import React from 'react';

export interface LanOliveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOlive: React.FC<LanOliveProps>;
export default LanOlive;
