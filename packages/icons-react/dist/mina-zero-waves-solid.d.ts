import React from 'react';

export interface MinaZeroWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroWavesSolid: React.FC<MinaZeroWavesSolidProps>;
export default MinaZeroWavesSolid;
