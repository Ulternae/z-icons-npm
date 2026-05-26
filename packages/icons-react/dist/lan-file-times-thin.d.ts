import React from 'react';

export interface LanFileTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTimesThin: React.FC<LanFileTimesThinProps>;
export default LanFileTimesThin;
