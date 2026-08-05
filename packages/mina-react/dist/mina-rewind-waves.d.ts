import React from 'react';

export interface MinaRewindWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindWaves(props: MinaRewindWavesProps): React.ReactElement;
export default MinaRewindWaves;
