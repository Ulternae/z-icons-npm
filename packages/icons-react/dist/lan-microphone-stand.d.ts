import React from 'react';

export interface LanMicrophoneStandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneStand: React.FC<LanMicrophoneStandProps>;
export default LanMicrophoneStand;
