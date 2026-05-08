import React from 'react';

export interface MinaForwardWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardWaves: React.FC<MinaForwardWavesProps>;
export default MinaForwardWaves;
