import React from 'react';

export interface MinaClockThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockThreeSolid: React.FC<MinaClockThreeSolidProps>;
export default MinaClockThreeSolid;
