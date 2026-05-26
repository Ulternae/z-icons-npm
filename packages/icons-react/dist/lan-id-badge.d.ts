import React from 'react';

export interface LanIdBadgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdBadge: React.FC<LanIdBadgeProps>;
export default LanIdBadge;
