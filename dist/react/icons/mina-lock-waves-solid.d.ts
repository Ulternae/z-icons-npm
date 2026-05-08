import React from 'react';

export interface MinaLockWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockWavesSolid: React.FC<MinaLockWavesSolidProps>;
export default MinaLockWavesSolid;
