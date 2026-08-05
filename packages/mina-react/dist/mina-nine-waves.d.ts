import React from 'react';

export interface MinaNineWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineWaves(props: MinaNineWavesProps): React.ReactElement;
export default MinaNineWaves;
