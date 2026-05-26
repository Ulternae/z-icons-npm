import React from 'react';

export interface LanDesktopCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopCodeSolid: React.FC<LanDesktopCodeSolidProps>;
export default LanDesktopCodeSolid;
