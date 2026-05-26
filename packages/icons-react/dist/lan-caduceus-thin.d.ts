import React from 'react';

export interface LanCaduceusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaduceusThin: React.FC<LanCaduceusThinProps>;
export default LanCaduceusThin;
