import React from 'react';

export interface LanCircleMicrophoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMicrophone: React.FC<LanCircleMicrophoneProps>;
export default LanCircleMicrophone;
