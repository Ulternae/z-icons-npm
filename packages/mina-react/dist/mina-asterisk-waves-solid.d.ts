import React from 'react';

export interface MinaAsteriskWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAsteriskWavesSolid(props: MinaAsteriskWavesSolidProps): React.ReactElement;
export default MinaAsteriskWavesSolid;
