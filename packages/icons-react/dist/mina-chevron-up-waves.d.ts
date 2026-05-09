import React from 'react';

export interface MinaChevronUpWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpWaves: React.FC<MinaChevronUpWavesProps>;
export default MinaChevronUpWaves;
