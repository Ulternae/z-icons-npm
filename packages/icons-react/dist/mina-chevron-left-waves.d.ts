import React from 'react';

export interface MinaChevronLeftWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronLeftWaves: React.FC<MinaChevronLeftWavesProps>;
export default MinaChevronLeftWaves;
