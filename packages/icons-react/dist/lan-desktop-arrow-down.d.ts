import React from 'react';

export interface LanDesktopArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopArrowDown: React.FC<LanDesktopArrowDownProps>;
export default LanDesktopArrowDown;
