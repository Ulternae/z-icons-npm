import React from 'react';

export interface MinaPauseWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseWavesSolid: React.FC<MinaPauseWavesSolidProps>;
export default MinaPauseWavesSolid;
