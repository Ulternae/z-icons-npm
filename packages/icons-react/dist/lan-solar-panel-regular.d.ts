import React from 'react';

export interface LanSolarPanelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSolarPanelRegular: React.FC<LanSolarPanelRegularProps>;
export default LanSolarPanelRegular;
