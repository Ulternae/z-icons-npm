import React from 'react';

export interface MinaHeartWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartWavesSolid: React.FC<MinaHeartWavesSolidProps>;
export default MinaHeartWavesSolid;
