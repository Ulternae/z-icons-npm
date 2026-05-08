import React from 'react';

export interface MinaSeaWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSeaWavesSolid: React.FC<MinaSeaWavesSolidProps>;
export default MinaSeaWavesSolid;
