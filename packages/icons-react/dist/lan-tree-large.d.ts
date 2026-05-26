import React from 'react';

export interface LanTreeLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeLarge: React.FC<LanTreeLargeProps>;
export default LanTreeLarge;
