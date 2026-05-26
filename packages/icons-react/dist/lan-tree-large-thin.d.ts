import React from 'react';

export interface LanTreeLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeLargeThin: React.FC<LanTreeLargeThinProps>;
export default LanTreeLargeThin;
