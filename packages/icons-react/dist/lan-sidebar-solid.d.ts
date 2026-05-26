import React from 'react';

export interface LanSidebarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarSolid: React.FC<LanSidebarSolidProps>;
export default LanSidebarSolid;
