import React from 'react';

export interface MinaDollarWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarWaves(props: MinaDollarWavesProps): React.ReactElement;
export default MinaDollarWaves;
