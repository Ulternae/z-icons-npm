import React from 'react';

export interface LanHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHThin: React.FC<LanHThinProps>;
export default LanHThin;
