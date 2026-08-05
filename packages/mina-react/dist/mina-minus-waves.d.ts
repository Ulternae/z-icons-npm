import React from 'react';

export interface MinaMinusWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinusWaves(props: MinaMinusWavesProps): React.ReactElement;
export default MinaMinusWaves;
