import React from 'react';

export interface MinaWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWaves: React.FC<MinaWavesProps>;
export default MinaWaves;
