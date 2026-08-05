import React from 'react';

export interface MinaWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWavesSolid(props: MinaWavesSolidProps): React.ReactElement;
export default MinaWavesSolid;
