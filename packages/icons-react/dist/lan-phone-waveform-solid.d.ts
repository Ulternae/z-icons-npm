import React from 'react';

export interface LanPhoneWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneWaveformSolid: React.FC<LanPhoneWaveformSolidProps>;
export default LanPhoneWaveformSolid;
