import React from 'react';

export interface LanSquareMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMicrophone: React.FC<LanSquareMicrophoneProps>;
export default LanSquareMicrophone;
