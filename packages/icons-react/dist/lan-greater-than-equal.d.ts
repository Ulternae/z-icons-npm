import React from 'react';

export interface LanGreaterThanEqualProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGreaterThanEqual: React.FC<LanGreaterThanEqualProps>;
export default LanGreaterThanEqual;
