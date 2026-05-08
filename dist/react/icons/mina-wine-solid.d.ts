import React from 'react';

export interface MinaWineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWineSolid: React.FC<MinaWineSolidProps>;
export default MinaWineSolid;
