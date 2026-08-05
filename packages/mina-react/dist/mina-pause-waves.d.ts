import React from 'react';

export interface MinaPauseWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseWaves(props: MinaPauseWavesProps): React.ReactElement;
export default MinaPauseWaves;
