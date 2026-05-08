import React from 'react';

export interface MinaSignalWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalWaves: React.FC<MinaSignalWavesProps>;
export default MinaSignalWaves;
