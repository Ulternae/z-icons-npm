import React from 'react';

export interface MinaMinusWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusWavesSolid: React.FC<MinaMinusWavesSolidProps>;
export default MinaMinusWavesSolid;
