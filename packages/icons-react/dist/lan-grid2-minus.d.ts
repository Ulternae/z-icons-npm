import React from 'react';

export interface LanGrid2MinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2Minus: React.FC<LanGrid2MinusProps>;
export default LanGrid2Minus;
