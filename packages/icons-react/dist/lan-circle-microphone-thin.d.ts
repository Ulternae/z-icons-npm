import React from 'react';

export interface LanCircleMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMicrophoneThin: React.FC<LanCircleMicrophoneThinProps>;
export default LanCircleMicrophoneThin;
