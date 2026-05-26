import React from 'react';

export interface LanFileArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileArrowDown: React.FC<LanFileArrowDownProps>;
export default LanFileArrowDown;
