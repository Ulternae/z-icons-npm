import React from 'react';

export interface MinaArrowRightWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowRightWaves: React.FC<MinaArrowRightWavesProps>;
export default MinaArrowRightWaves;
