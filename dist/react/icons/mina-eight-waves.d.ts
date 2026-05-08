import React from 'react';

export interface MinaEightWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightWaves: React.FC<MinaEightWavesProps>;
export default MinaEightWaves;
