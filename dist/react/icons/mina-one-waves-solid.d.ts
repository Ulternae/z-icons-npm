import React from 'react';

export interface MinaOneWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneWavesSolid: React.FC<MinaOneWavesSolidProps>;
export default MinaOneWavesSolid;
