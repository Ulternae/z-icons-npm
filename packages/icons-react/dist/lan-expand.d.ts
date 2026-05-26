import React from 'react';

export interface LanExpandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpand: React.FC<LanExpandProps>;
export default LanExpand;
