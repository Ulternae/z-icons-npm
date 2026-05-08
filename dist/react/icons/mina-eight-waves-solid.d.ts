import React from 'react';

export interface MinaEightWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightWavesSolid: React.FC<MinaEightWavesSolidProps>;
export default MinaEightWavesSolid;
