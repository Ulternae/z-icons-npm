import React from 'react';

export interface LanAirplayAudioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplayAudioRegular: React.FC<LanAirplayAudioRegularProps>;
export default LanAirplayAudioRegular;
