import React from 'react';

export interface MinaPlayWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayWaves(props: MinaPlayWavesProps): React.ReactElement;
export default MinaPlayWaves;
