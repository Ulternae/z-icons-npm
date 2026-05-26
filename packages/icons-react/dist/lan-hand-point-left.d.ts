import React from 'react';

export interface LanHandPointLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointLeft: React.FC<LanHandPointLeftProps>;
export default LanHandPointLeft;
