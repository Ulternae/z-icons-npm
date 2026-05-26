import React from 'react';

export interface LanSidebarFlipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarFlip: React.FC<LanSidebarFlipProps>;
export default LanSidebarFlip;
