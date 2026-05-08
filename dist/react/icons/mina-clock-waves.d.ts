import React from 'react';

export interface MinaClockWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockWaves: React.FC<MinaClockWavesProps>;
export default MinaClockWaves;
