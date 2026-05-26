import React from 'react';

export interface LanWaveSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSquare: React.FC<LanWaveSquareProps>;
export default LanWaveSquare;
