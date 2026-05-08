import React from 'react';

export interface MinaOneWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneWaves: React.FC<MinaOneWavesProps>;
export default MinaOneWaves;
