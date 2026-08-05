import React from 'react';

export interface MinaSeaWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSeaWaves(props: MinaSeaWavesProps): React.ReactElement;
export default MinaSeaWaves;
