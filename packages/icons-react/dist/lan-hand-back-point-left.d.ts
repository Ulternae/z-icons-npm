import React from 'react';

export interface LanHandBackPointLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandBackPointLeft: React.FC<LanHandBackPointLeftProps>;
export default LanHandBackPointLeft;
