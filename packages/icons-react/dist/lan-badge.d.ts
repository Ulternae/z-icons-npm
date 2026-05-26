import React from 'react';

export interface LanBadgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBadge: React.FC<LanBadgeProps>;
export default LanBadge;
