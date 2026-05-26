import React from 'react';

export interface LanChevronDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronDown: React.FC<LanChevronDownProps>;
export default LanChevronDown;
