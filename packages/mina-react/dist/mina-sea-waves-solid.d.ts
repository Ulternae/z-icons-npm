import React from 'react';

export interface MinaSeaWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSeaWavesSolid(props: MinaSeaWavesSolidProps): React.ReactElement;
export default MinaSeaWavesSolid;
