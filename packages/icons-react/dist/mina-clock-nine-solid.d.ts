import React from 'react';

export interface MinaClockNineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockNineSolid: React.FC<MinaClockNineSolidProps>;
export default MinaClockNineSolid;
