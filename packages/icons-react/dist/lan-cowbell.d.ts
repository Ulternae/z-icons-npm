import React from 'react';

export interface LanCowbellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbell: React.FC<LanCowbellProps>;
export default LanCowbell;
