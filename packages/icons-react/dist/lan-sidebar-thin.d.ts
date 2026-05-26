import React from 'react';

export interface LanSidebarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarThin: React.FC<LanSidebarThinProps>;
export default LanSidebarThin;
