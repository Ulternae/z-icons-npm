import React from 'react';

export interface MinaClockWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockWavesSolid(props: MinaClockWavesSolidProps): React.ReactElement;
export default MinaClockWavesSolid;
