import React from 'react';

export interface MinaPlayWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayWavesSolid(props: MinaPlayWavesSolidProps): React.ReactElement;
export default MinaPlayWavesSolid;
