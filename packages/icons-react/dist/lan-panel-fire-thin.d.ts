import React from 'react';

export interface LanPanelFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelFireThin: React.FC<LanPanelFireThinProps>;
export default LanPanelFireThin;
