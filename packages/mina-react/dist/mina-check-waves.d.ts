import React from 'react';

export interface MinaCheckWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckWaves(props: MinaCheckWavesProps): React.ReactElement;
export default MinaCheckWaves;
