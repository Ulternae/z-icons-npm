import React from 'react';

export interface LanPanelFireRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanelFireRegular: React.FC<LanPanelFireRegularProps>;
export default LanPanelFireRegular;
