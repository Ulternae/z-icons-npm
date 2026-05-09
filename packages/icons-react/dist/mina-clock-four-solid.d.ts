import React from 'react';

export interface MinaClockFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockFourSolid: React.FC<MinaClockFourSolidProps>;
export default MinaClockFourSolid;
