import React from 'react';

export interface MinaLockWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockWaves: React.FC<MinaLockWavesProps>;
export default MinaLockWaves;
