import React from 'react';

export interface LanPanelEwsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelEws: React.FC<LanPanelEwsProps>;
export default LanPanelEws;
