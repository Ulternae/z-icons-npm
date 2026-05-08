import React from 'react';

export interface MinaClockTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockTwoSolid: React.FC<MinaClockTwoSolidProps>;
export default MinaClockTwoSolid;
