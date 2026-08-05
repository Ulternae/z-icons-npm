import React from 'react';

export interface MinaStopWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaStopWaves(props: MinaStopWavesProps): React.ReactElement;
export default MinaStopWaves;
