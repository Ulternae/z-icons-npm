import React from 'react';

export interface MinaPlusWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusWavesSolid: React.FC<MinaPlusWavesSolidProps>;
export default MinaPlusWavesSolid;
