import React from 'react';

export interface MinaNineWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineWaves: React.FC<MinaNineWavesProps>;
export default MinaNineWaves;
