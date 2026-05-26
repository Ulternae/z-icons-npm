import React from 'react';

export interface LanPanelEwsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelEwsSolid: React.FC<LanPanelEwsSolidProps>;
export default LanPanelEwsSolid;
