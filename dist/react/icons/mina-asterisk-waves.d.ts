import React from 'react';

export interface MinaAsteriskWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskWaves: React.FC<MinaAsteriskWavesProps>;
export default MinaAsteriskWaves;
