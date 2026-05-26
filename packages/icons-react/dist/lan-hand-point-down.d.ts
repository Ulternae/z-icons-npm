import React from 'react';

export interface LanHandPointDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandPointDown: React.FC<LanHandPointDownProps>;
export default LanHandPointDown;
