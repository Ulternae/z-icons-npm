import React from 'react';

export interface MinaFourWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourWaves: React.FC<MinaFourWavesProps>;
export default MinaFourWaves;
