import React from 'react';

export interface MinaFourWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourWavesSolid: React.FC<MinaFourWavesSolidProps>;
export default MinaFourWavesSolid;
