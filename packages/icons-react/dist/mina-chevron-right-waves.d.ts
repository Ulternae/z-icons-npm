import React from 'react';

export interface MinaChevronRightWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronRightWaves: React.FC<MinaChevronRightWavesProps>;
export default MinaChevronRightWaves;
