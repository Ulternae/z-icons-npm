import React from 'react';

export interface MinaYenWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenWavesSolid: React.FC<MinaYenWavesSolidProps>;
export default MinaYenWavesSolid;
