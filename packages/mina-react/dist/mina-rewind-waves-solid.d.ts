import React from 'react';

export interface MinaRewindWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindWavesSolid(props: MinaRewindWavesSolidProps): React.ReactElement;
export default MinaRewindWavesSolid;
