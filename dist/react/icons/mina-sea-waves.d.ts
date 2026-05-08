import React from 'react';

export interface MinaSeaWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSeaWaves: React.FC<MinaSeaWavesProps>;
export default MinaSeaWaves;
