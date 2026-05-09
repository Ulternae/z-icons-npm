import React from 'react';

export interface MinaYenWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenWaves: React.FC<MinaYenWavesProps>;
export default MinaYenWaves;
