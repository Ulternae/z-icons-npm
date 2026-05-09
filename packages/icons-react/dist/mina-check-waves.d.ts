import React from 'react';

export interface MinaCheckWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckWaves: React.FC<MinaCheckWavesProps>;
export default MinaCheckWaves;
