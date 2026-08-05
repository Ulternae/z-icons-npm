import React from 'react';

export interface MinaLockWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockWaves(props: MinaLockWavesProps): React.ReactElement;
export default MinaLockWaves;
