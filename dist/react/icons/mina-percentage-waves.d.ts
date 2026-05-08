import React from 'react';

export interface MinaPercentageWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageWaves: React.FC<MinaPercentageWavesProps>;
export default MinaPercentageWaves;
