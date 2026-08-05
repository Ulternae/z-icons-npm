import React from 'react';

export interface MinaSevenWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSevenWaves(props: MinaSevenWavesProps): React.ReactElement;
export default MinaSevenWaves;
