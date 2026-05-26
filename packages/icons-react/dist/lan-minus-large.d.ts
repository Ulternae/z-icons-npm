import React from 'react';

export interface LanMinusLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusLarge: React.FC<LanMinusLargeProps>;
export default LanMinusLarge;
