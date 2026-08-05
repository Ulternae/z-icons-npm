import React from 'react';

export interface MinaFourWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourWaves(props: MinaFourWavesProps): React.ReactElement;
export default MinaFourWaves;
