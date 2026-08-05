import React from 'react';

export interface MinaClockWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockWaves(props: MinaClockWavesProps): React.ReactElement;
export default MinaClockWaves;
