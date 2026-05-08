import React from 'react';

export interface MinaWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWavesSolid: React.FC<MinaWavesSolidProps>;
export default MinaWavesSolid;
