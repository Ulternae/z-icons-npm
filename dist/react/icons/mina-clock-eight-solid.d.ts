import React from 'react';

export interface MinaClockEightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockEightSolid: React.FC<MinaClockEightSolidProps>;
export default MinaClockEightSolid;
