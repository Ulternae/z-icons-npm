import React from 'react';

export interface LanEyesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyesThin: React.FC<LanEyesThinProps>;
export default LanEyesThin;
