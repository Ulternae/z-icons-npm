import React from 'react';

export interface LanBrowsersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrowsersThin: React.FC<LanBrowsersThinProps>;
export default LanBrowsersThin;
