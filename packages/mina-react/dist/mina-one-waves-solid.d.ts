import React from 'react';

export interface MinaOneWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaOneWavesSolid(props: MinaOneWavesSolidProps): React.ReactElement;
export default MinaOneWavesSolid;
