import React from 'react';

export interface LanSquareQuartersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuartersSolid: React.FC<LanSquareQuartersSolidProps>;
export default LanSquareQuartersSolid;
