import React from 'react';

export interface LanDesktopAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopAlt: React.FC<LanDesktopAltProps>;
export default LanDesktopAlt;
