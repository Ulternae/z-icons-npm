import React from 'react';

export interface MinaEuroWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroWaves: React.FC<MinaEuroWavesProps>;
export default MinaEuroWaves;
