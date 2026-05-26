import React from 'react';

export interface LanBoxArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxArrowDown: React.FC<LanBoxArrowDownProps>;
export default LanBoxArrowDown;
