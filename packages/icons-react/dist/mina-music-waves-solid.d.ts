import React from 'react';

export interface MinaMusicWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicWavesSolid: React.FC<MinaMusicWavesSolidProps>;
export default MinaMusicWavesSolid;
