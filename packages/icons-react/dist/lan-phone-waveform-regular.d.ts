import React from 'react';

export interface LanPhoneWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneWaveformRegular: React.FC<LanPhoneWaveformRegularProps>;
export default LanPhoneWaveformRegular;
