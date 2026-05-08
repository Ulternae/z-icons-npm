import React from 'react';

export interface MinaHashWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashWaves: React.FC<MinaHashWavesProps>;
export default MinaHashWaves;
