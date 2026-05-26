import React from 'react';

export interface LanBookOpenLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenLinesThin: React.FC<LanBookOpenLinesThinProps>;
export default LanBookOpenLinesThin;
