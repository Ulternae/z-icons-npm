import React from 'react';

export interface MinaMusicWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicWaves(props: MinaMusicWavesProps): React.ReactElement;
export default MinaMusicWaves;
