import React from 'react';

export interface MinaArrowDownWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowDownWaves: React.FC<MinaArrowDownWavesProps>;
export default MinaArrowDownWaves;
