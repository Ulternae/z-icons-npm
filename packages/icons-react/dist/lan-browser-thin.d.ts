import React from 'react';

export interface LanBrowserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowserThin: React.FC<LanBrowserThinProps>;
export default LanBrowserThin;
