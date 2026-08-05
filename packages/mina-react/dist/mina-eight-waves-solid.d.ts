import React from 'react';

export interface MinaEightWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEightWavesSolid(props: MinaEightWavesSolidProps): React.ReactElement;
export default MinaEightWavesSolid;
