import React from 'react';

export interface MinaSignalWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalWaves(props: MinaSignalWavesProps): React.ReactElement;
export default MinaSignalWaves;
