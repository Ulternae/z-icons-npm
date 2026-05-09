import React from 'react';

export interface MinaDotsVerticalWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsVerticalWaves: React.FC<MinaDotsVerticalWavesProps>;
export default MinaDotsVerticalWaves;
