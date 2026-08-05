import React from 'react';

export interface MinaOneWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneWaves(props: MinaOneWavesProps): React.ReactElement;
export default MinaOneWaves;
