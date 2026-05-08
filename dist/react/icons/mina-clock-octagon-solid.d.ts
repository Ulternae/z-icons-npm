import React from 'react';

export interface MinaClockOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockOctagonSolid: React.FC<MinaClockOctagonSolidProps>;
export default MinaClockOctagonSolid;
