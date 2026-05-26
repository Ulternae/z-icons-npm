import React from 'react';

export interface LanPersonDotsFromLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDotsFromLine: React.FC<LanPersonDotsFromLineProps>;
export default LanPersonDotsFromLine;
