import React from 'react';

export interface LanAirplayAudioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplayAudioThin: React.FC<LanAirplayAudioThinProps>;
export default LanAirplayAudioThin;
