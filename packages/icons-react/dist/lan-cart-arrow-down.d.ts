import React from 'react';

export interface LanCartArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartArrowDown: React.FC<LanCartArrowDownProps>;
export default LanCartArrowDown;
