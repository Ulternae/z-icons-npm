import React from 'react';

export interface MinaThreeWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeWaves: React.FC<MinaThreeWavesProps>;
export default MinaThreeWaves;
