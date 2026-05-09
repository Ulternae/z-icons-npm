import React from 'react';

export interface MinaCodeWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeWaves: React.FC<MinaCodeWavesProps>;
export default MinaCodeWaves;
