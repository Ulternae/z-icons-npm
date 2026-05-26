import React from 'react';

export interface LanMicrophoneCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneCirclePlus: React.FC<LanMicrophoneCirclePlusProps>;
export default LanMicrophoneCirclePlus;
