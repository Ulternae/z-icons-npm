import React from 'react';

export interface MinaZeroWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroWaves: React.FC<MinaZeroWavesProps>;
export default MinaZeroWaves;
