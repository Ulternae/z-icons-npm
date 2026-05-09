import React from 'react';

export interface MinaFiveWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveWavesSolid: React.FC<MinaFiveWavesSolidProps>;
export default MinaFiveWavesSolid;
