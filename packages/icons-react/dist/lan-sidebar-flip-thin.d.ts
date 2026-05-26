import React from 'react';

export interface LanSidebarFlipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarFlipThin: React.FC<LanSidebarFlipThinProps>;
export default LanSidebarFlipThin;
