import React from 'react';

export interface LanDesktopCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopCode: React.FC<LanDesktopCodeProps>;
export default LanDesktopCode;
