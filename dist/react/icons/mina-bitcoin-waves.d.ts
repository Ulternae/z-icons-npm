import React from 'react';

export interface MinaBitcoinWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinWaves: React.FC<MinaBitcoinWavesProps>;
export default MinaBitcoinWaves;
