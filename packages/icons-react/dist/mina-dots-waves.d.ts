import React from 'react';

export interface MinaDotsWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsWaves: React.FC<MinaDotsWavesProps>;
export default MinaDotsWaves;
