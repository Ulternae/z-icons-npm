import React from 'react';

export interface LanPanelFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelFireSolid: React.FC<LanPanelFireSolidProps>;
export default LanPanelFireSolid;
