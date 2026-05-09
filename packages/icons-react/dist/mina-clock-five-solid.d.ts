import React from 'react';

export interface MinaClockFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockFiveSolid: React.FC<MinaClockFiveSolidProps>;
export default MinaClockFiveSolid;
