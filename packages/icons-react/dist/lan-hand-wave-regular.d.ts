import React from 'react';

export interface LanHandWaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandWaveRegular: React.FC<LanHandWaveRegularProps>;
export default LanHandWaveRegular;
