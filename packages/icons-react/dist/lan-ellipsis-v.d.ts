import React from 'react';

export interface LanEllipsisVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEllipsisV: React.FC<LanEllipsisVProps>;
export default LanEllipsisV;
