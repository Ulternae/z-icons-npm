import React from 'react';

export interface MinaDangerWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerWaves(props: MinaDangerWavesProps): React.ReactElement;
export default MinaDangerWaves;
