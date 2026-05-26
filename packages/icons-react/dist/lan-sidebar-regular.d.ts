import React from 'react';

export interface LanSidebarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarRegular: React.FC<LanSidebarRegularProps>;
export default LanSidebarRegular;
