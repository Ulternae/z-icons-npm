import React from 'react';

export interface MinaClockSevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockSevenSolid: React.FC<MinaClockSevenSolidProps>;
export default MinaClockSevenSolid;
