import React from 'react';

export interface LanOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagon: React.FC<LanOctagonProps>;
export default LanOctagon;
