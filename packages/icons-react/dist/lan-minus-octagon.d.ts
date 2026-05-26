import React from 'react';

export interface LanMinusOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusOctagon: React.FC<LanMinusOctagonProps>;
export default LanMinusOctagon;
