import React from 'react';

export interface MinaClockTwelveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockTwelveSolid: React.FC<MinaClockTwelveSolidProps>;
export default MinaClockTwelveSolid;
