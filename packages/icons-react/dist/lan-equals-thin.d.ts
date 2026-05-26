import React from 'react';

export interface LanEqualsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEqualsThin: React.FC<LanEqualsThinProps>;
export default LanEqualsThin;
