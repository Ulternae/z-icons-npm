import React from 'react';

export interface MinaNineWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineWavesSolid: React.FC<MinaNineWavesSolidProps>;
export default MinaNineWavesSolid;
