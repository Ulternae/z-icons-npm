import React from 'react';

export interface MinaRainbowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRainbowSolid: React.FC<MinaRainbowSolidProps>;
export default MinaRainbowSolid;
