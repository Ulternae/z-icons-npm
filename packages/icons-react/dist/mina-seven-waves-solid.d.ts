import React from 'react';

export interface MinaSevenWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenWavesSolid: React.FC<MinaSevenWavesSolidProps>;
export default MinaSevenWavesSolid;
