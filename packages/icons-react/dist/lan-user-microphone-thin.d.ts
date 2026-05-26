import React from 'react';

export interface LanUserMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMicrophoneThin: React.FC<LanUserMicrophoneThinProps>;
export default LanUserMicrophoneThin;
