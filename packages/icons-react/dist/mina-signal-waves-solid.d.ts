import React from 'react';

export interface MinaSignalWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalWavesSolid: React.FC<MinaSignalWavesSolidProps>;
export default MinaSignalWavesSolid;
