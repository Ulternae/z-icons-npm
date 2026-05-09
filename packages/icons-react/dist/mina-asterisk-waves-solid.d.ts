import React from 'react';

export interface MinaAsteriskWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskWavesSolid: React.FC<MinaAsteriskWavesSolidProps>;
export default MinaAsteriskWavesSolid;
