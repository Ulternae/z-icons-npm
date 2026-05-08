import React from 'react';

export interface MinaClockSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockSixSolid: React.FC<MinaClockSixSolidProps>;
export default MinaClockSixSolid;
