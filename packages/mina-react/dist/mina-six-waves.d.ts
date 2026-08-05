import React from 'react';

export interface MinaSixWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixWaves(props: MinaSixWavesProps): React.ReactElement;
export default MinaSixWaves;
