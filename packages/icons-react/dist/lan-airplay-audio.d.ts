import React from 'react';

export interface LanAirplayAudioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplayAudio: React.FC<LanAirplayAudioProps>;
export default LanAirplayAudio;
