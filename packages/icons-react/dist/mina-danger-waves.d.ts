import React from 'react';

export interface MinaDangerWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerWaves: React.FC<MinaDangerWavesProps>;
export default MinaDangerWaves;
