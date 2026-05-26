import React from 'react';

export interface LanWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformRegular: React.FC<LanWaveformRegularProps>;
export default LanWaveformRegular;
