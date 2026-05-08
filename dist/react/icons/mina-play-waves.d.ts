import React from 'react';

export interface MinaPlayWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlayWaves: React.FC<MinaPlayWavesProps>;
export default MinaPlayWaves;
