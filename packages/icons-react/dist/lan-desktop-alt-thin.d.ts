import React from 'react';

export interface LanDesktopAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopAltThin: React.FC<LanDesktopAltThinProps>;
export default LanDesktopAltThin;
