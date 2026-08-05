import React from 'react';

export interface MinaZeroWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaZeroWavesSolid(props: MinaZeroWavesSolidProps): React.ReactElement;
export default MinaZeroWavesSolid;
