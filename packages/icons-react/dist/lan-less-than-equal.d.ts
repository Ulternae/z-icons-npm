import React from 'react';

export interface LanLessThanEqualProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLessThanEqual: React.FC<LanLessThanEqualProps>;
export default LanLessThanEqual;
