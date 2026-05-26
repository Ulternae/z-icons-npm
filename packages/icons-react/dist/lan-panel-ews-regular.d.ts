import React from 'react';

export interface LanPanelEwsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelEwsRegular: React.FC<LanPanelEwsRegularProps>;
export default LanPanelEwsRegular;
