import React from 'react';

export interface MinaDotsWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsWavesSolid: React.FC<MinaDotsWavesSolidProps>;
export default MinaDotsWavesSolid;
