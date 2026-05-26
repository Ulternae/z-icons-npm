import React from 'react';

export interface LanMicroscopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicroscopeThin: React.FC<LanMicroscopeThinProps>;
export default LanMicroscopeThin;
