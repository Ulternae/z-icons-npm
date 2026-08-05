import React from 'react';

export interface MinaPlusWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusWaves(props: MinaPlusWavesProps): React.ReactElement;
export default MinaPlusWaves;
