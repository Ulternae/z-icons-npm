import React from 'react';

export interface LanStairsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairs: React.FC<LanStairsProps>;
export default LanStairs;
