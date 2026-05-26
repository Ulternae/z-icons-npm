import React from 'react';

export interface LanBarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsThin: React.FC<LanBarsThinProps>;
export default LanBarsThin;
