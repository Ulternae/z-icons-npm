import React from 'react';

export interface MinaEuroWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEuroWavesSolid(props: MinaEuroWavesSolidProps): React.ReactElement;
export default MinaEuroWavesSolid;
