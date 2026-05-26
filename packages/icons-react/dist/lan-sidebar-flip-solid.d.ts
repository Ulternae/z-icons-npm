import React from 'react';

export interface LanSidebarFlipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarFlipSolid: React.FC<LanSidebarFlipSolidProps>;
export default LanSidebarFlipSolid;
