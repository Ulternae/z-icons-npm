import React from 'react';

export interface MinaLockWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockWavesSolid(props: MinaLockWavesSolidProps): React.ReactElement;
export default MinaLockWavesSolid;
