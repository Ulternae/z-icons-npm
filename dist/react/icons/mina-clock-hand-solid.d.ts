import React from 'react';

export interface MinaClockHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockHandSolid: React.FC<MinaClockHandSolidProps>;
export default MinaClockHandSolid;
