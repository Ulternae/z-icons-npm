import React from 'react';

export interface MinaPauseWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseWaves: React.FC<MinaPauseWavesProps>;
export default MinaPauseWaves;
