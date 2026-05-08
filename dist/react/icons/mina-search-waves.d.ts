import React from 'react';

export interface MinaSearchWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchWaves: React.FC<MinaSearchWavesProps>;
export default MinaSearchWaves;
