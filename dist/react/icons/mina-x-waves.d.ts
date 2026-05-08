import React from 'react';

export interface MinaXWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXWaves: React.FC<MinaXWavesProps>;
export default MinaXWaves;
