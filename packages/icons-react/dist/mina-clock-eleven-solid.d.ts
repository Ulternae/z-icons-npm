import React from 'react';

export interface MinaClockElevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockElevenSolid: React.FC<MinaClockElevenSolidProps>;
export default MinaClockElevenSolid;
