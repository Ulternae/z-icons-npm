import React from 'react';

export interface LanEarWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarWaveformRegular: React.FC<LanEarWaveformRegularProps>;
export default LanEarWaveformRegular;
