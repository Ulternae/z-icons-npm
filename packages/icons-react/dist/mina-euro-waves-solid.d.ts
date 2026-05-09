import React from 'react';

export interface MinaEuroWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroWavesSolid: React.FC<MinaEuroWavesSolidProps>;
export default MinaEuroWavesSolid;
