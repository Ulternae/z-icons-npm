import React from 'react';

export interface MinaDotsWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsWavesSolid(props: MinaDotsWavesSolidProps): React.ReactElement;
export default MinaDotsWavesSolid;
