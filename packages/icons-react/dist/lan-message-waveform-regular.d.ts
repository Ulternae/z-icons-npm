import React from 'react';

export interface LanMessageWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageWaveformRegular: React.FC<LanMessageWaveformRegularProps>;
export default LanMessageWaveformRegular;
