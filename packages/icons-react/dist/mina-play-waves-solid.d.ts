import React from 'react';

export interface MinaPlayWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayWavesSolid: React.FC<MinaPlayWavesSolidProps>;
export default MinaPlayWavesSolid;
