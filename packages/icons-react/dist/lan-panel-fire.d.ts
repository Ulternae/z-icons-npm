import React from 'react';

export interface LanPanelFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelFire: React.FC<LanPanelFireProps>;
export default LanPanelFire;
