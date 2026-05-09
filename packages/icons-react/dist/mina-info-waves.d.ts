import React from 'react';

export interface MinaInfoWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoWaves: React.FC<MinaInfoWavesProps>;
export default MinaInfoWaves;
