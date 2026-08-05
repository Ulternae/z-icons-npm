import React from 'react';

export interface MinaWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWaves(props: MinaWavesProps): React.ReactElement;
export default MinaWaves;
