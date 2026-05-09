import React from 'react';

export interface MinaChevronDownWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronDownWaves: React.FC<MinaChevronDownWavesProps>;
export default MinaChevronDownWaves;
