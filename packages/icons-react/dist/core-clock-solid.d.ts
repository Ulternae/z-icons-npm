import React from 'react';

export interface CoreClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClockSolid: React.FC<CoreClockSolidProps>;
export default CoreClockSolid;
