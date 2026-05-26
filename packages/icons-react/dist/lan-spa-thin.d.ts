import React from 'react';

export interface LanSpaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaThin: React.FC<LanSpaThinProps>;
export default LanSpaThin;
