import React from 'react';

export interface LanCodeCompareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeCompare: React.FC<LanCodeCompareProps>;
export default LanCodeCompare;
