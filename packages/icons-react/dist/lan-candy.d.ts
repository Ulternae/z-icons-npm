import React from 'react';

export interface LanCandyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandy: React.FC<LanCandyProps>;
export default LanCandy;
