import React from 'react';

export interface MinaClockSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockSquareSolid: React.FC<MinaClockSquareSolidProps>;
export default MinaClockSquareSolid;
