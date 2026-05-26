import React from 'react';

export interface LanUserMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMicrophone: React.FC<LanUserMicrophoneProps>;
export default LanUserMicrophone;
