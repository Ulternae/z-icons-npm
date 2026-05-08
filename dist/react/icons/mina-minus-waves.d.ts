import React from 'react';

export interface MinaMinusWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusWaves: React.FC<MinaMinusWavesProps>;
export default MinaMinusWaves;
