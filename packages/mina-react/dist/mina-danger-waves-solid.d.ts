import React from 'react';

export interface MinaDangerWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerWavesSolid(props: MinaDangerWavesSolidProps): React.ReactElement;
export default MinaDangerWavesSolid;
