import React from 'react';

export interface LanShortsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShortsThin: React.FC<LanShortsThinProps>;
export default LanShortsThin;
