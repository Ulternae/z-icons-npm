import React from 'react';

export interface LanSquareMicrophoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMicrophoneThin: React.FC<LanSquareMicrophoneThinProps>;
export default LanSquareMicrophoneThin;
