import React from 'react';

export interface MinaHeartWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartWaves: React.FC<MinaHeartWavesProps>;
export default MinaHeartWaves;
