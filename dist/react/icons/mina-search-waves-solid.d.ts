import React from 'react';

export interface MinaSearchWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchWavesSolid: React.FC<MinaSearchWavesSolidProps>;
export default MinaSearchWavesSolid;
