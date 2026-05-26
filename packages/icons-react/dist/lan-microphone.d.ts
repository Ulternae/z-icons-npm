import React from 'react';

export interface LanMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophone: React.FC<LanMicrophoneProps>;
export default LanMicrophone;
