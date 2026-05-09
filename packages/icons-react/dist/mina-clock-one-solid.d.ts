import React from 'react';

export interface MinaClockOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockOneSolid: React.FC<MinaClockOneSolidProps>;
export default MinaClockOneSolid;
