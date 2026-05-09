import React from 'react';

export interface MinaBadgeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBadge: React.FC<MinaBadgeProps>;
export default MinaBadge;
