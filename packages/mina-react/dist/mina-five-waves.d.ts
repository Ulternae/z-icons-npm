import React from 'react';

export interface MinaFiveWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveWaves(props: MinaFiveWavesProps): React.ReactElement;
export default MinaFiveWaves;
