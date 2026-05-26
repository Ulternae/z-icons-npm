import React from 'react';

export interface LanDesktopCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopCodeThin: React.FC<LanDesktopCodeThinProps>;
export default LanDesktopCodeThin;
