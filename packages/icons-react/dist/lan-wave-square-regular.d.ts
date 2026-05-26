import React from 'react';

export interface LanWaveSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSquareRegular: React.FC<LanWaveSquareRegularProps>;
export default LanWaveSquareRegular;
