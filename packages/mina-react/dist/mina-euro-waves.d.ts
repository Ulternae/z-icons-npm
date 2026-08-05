import React from 'react';

export interface MinaEuroWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroWaves(props: MinaEuroWavesProps): React.ReactElement;
export default MinaEuroWaves;
