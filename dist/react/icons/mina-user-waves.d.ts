import React from 'react';

export interface MinaUserWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserWaves: React.FC<MinaUserWavesProps>;
export default MinaUserWaves;
