import React from 'react';

export interface LanSubscriptSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubscriptSolid: React.FC<LanSubscriptSolidProps>;
export default LanSubscriptSolid;
