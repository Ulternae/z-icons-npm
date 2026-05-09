import React from 'react';

export interface MinaPercentageWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageWavesSolid: React.FC<MinaPercentageWavesSolidProps>;
export default MinaPercentageWavesSolid;
