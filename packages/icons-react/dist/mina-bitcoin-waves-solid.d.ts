import React from 'react';

export interface MinaBitcoinWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinWavesSolid: React.FC<MinaBitcoinWavesSolidProps>;
export default MinaBitcoinWavesSolid;
