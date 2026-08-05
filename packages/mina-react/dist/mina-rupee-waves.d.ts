import React from 'react';

export interface MinaRupeeWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeWaves(props: MinaRupeeWavesProps): React.ReactElement;
export default MinaRupeeWaves;
