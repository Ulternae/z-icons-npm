import React from 'react';

export interface LanTreesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreesThin: React.FC<LanTreesThinProps>;
export default LanTreesThin;
