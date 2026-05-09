import React from 'react';

export interface MinaHashWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashWavesSolid: React.FC<MinaHashWavesSolidProps>;
export default MinaHashWavesSolid;
