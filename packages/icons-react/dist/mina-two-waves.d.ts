import React from 'react';

export interface MinaTwoWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoWaves: React.FC<MinaTwoWavesProps>;
export default MinaTwoWaves;
