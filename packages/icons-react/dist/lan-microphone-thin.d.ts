import React from 'react';

export interface LanMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneThin: React.FC<LanMicrophoneThinProps>;
export default LanMicrophoneThin;
