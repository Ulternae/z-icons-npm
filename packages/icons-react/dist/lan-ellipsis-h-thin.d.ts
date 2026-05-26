import React from 'react';

export interface LanEllipsisHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisHThin: React.FC<LanEllipsisHThinProps>;
export default LanEllipsisHThin;
