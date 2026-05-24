import React from 'react';

export interface BruAccessibleIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAccessibleIcon: React.FC<BruAccessibleIconProps>;
export default BruAccessibleIcon;
