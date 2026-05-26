import React from 'react';

export interface LanJeansStraightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJeansStraightSolid: React.FC<LanJeansStraightSolidProps>;
export default LanJeansStraightSolid;
