import React from 'react';

export interface LanEmptySetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEmptySet: React.FC<LanEmptySetProps>;
export default LanEmptySet;
