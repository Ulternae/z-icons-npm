import React from 'react';

export interface MinaSevenWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenWaves: React.FC<MinaSevenWavesProps>;
export default MinaSevenWaves;
