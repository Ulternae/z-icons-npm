import React from 'react';

export interface MinaSixWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixWavesSolid: React.FC<MinaSixWavesSolidProps>;
export default MinaSixWavesSolid;
