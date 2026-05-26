import React from 'react';

export interface LanSidebarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebar: React.FC<LanSidebarProps>;
export default LanSidebar;
