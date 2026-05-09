import React from 'react';

export interface MinaStopWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopWaves: React.FC<MinaStopWavesProps>;
export default MinaStopWaves;
