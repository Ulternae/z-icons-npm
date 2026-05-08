import React from 'react';

export interface MinaClockCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockCircleSolid: React.FC<MinaClockCircleSolidProps>;
export default MinaClockCircleSolid;
