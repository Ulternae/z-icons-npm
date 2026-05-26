import React from 'react';

export interface LanWaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveRegular: React.FC<LanWaveRegularProps>;
export default LanWaveRegular;
