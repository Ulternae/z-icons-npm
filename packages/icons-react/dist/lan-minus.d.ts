import React from 'react';

export interface LanMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinus: React.FC<LanMinusProps>;
export default LanMinus;
