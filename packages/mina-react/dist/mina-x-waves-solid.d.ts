import React from 'react';

export interface MinaXWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXWavesSolid(props: MinaXWavesSolidProps): React.ReactElement;
export default MinaXWavesSolid;
