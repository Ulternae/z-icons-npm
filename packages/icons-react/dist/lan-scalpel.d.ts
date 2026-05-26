import React from 'react';

export interface LanScalpelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpel: React.FC<LanScalpelProps>;
export default LanScalpel;
