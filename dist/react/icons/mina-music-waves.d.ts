import React from 'react';

export interface MinaMusicWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicWaves: React.FC<MinaMusicWavesProps>;
export default MinaMusicWaves;
