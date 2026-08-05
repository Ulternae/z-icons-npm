import React from 'react';

export interface MinaNineWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineWavesSolid(props: MinaNineWavesSolidProps): React.ReactElement;
export default MinaNineWavesSolid;
