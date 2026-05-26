import React from 'react';

export interface LanJeansStraightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeansStraight: React.FC<LanJeansStraightProps>;
export default LanJeansStraight;
