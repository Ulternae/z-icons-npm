import React from 'react';

export interface MinaHeartWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartWaves(props: MinaHeartWavesProps): React.ReactElement;
export default MinaHeartWaves;
