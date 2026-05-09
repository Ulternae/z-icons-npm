import React from 'react';

export interface MinaRewindWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindWavesSolid: React.FC<MinaRewindWavesSolidProps>;
export default MinaRewindWavesSolid;
