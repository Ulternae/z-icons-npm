import React from 'react';

export interface LanWavesSineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWavesSineRegular: React.FC<LanWavesSineRegularProps>;
export default LanWavesSineRegular;
