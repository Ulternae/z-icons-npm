import React from 'react';

export interface MinaClockWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockWavesSolid: React.FC<MinaClockWavesSolidProps>;
export default MinaClockWavesSolid;
