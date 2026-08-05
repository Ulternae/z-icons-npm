import React from 'react';

export interface MinaAsteriskWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskWaves(props: MinaAsteriskWavesProps): React.ReactElement;
export default MinaAsteriskWaves;
