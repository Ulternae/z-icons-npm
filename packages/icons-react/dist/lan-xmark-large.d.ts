import React from 'react';

export interface LanXmarkLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarkLarge: React.FC<LanXmarkLargeProps>;
export default LanXmarkLarge;
