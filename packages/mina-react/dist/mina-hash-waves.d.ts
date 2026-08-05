import React from 'react';

export interface MinaHashWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashWaves(props: MinaHashWavesProps): React.ReactElement;
export default MinaHashWaves;
