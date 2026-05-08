import React from 'react';

export interface MinaFiveWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveWaves: React.FC<MinaFiveWavesProps>;
export default MinaFiveWaves;
