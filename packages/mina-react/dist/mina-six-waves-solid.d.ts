import React from 'react';

export interface MinaSixWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSixWavesSolid(props: MinaSixWavesSolidProps): React.ReactElement;
export default MinaSixWavesSolid;
